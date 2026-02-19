import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ListRenderItem,
  ScrollView,
} from 'react-native';
import TextComp from '@/components/TextComp';
import ButtonComp from '@/components/ButtonComp';
import OnboardingHeader from '@/components/OnboardingHeader';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/types';
import { moderateScale } from '@/styles/scaling';
import styles from './styles';

const ITEM_HEIGHT = moderateScale(40);
const VISIBLE_ITEMS = 5;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

const TOTAL_STEPS = 5;
const STEP_INDEX = 1;

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

interface PickerColumnProps {
  label: string;
  data: number[];
  selectedValue: number;
  onChange: (value: number) => void;
  formatItem?: (value: number) => string;
}

const PickerColumn: React.FC<PickerColumnProps> = ({
  label,
  data,
  selectedValue,
  onChange,
  formatItem = (v) => String(v),
}) => {
  const flatListRef = useRef<FlatList>(null);
  const safeData = data ?? [];
  const selectedIndex = safeData.indexOf(selectedValue);

  useEffect(() => {
    if (safeData.length > 0 && selectedIndex >= 0) {
      flatListRef.current?.scrollToIndex({
        index: selectedIndex,
        animated: false,
      });
    }
  }, []);

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const handleMomentumEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = e.nativeEvent.contentOffset.y;
      const index = Math.round(offsetY / ITEM_HEIGHT);
      const clampedIndex = Math.max(0, Math.min(index, safeData.length - 1));
      if (safeData[clampedIndex] !== selectedValue) {
        onChange(safeData[clampedIndex]);
      }
    },
    [safeData, selectedValue, onChange]
  );

  const renderItem: ListRenderItem<number> = ({ item }) => {
    const isSelected = item === selectedValue;
    return (
      <View
        style={[
          styles.pickerItem,
          isSelected && styles.pickerItemSelected,
        ]}
      >
        <TextComp
          text={formatItem(item)}
          style={[
            styles.pickerItemText,
            isSelected && styles.pickerItemTextSelected,
          ]}
        />
      </View>
    );
  };

  if (safeData.length === 0) return null;

  return (
    <View style={styles.pickerCol}>
      <TextComp text={label} style={styles.pickerLabel} />
      <View style={styles.pickerList}>
        <FlatList
          ref={flatListRef}
          data={safeData}
          keyExtractor={(item) => item.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={handleMomentumEnd}
          getItemLayout={getItemLayout}
          contentContainerStyle={styles.pickerContentContainer}
        />
        <View pointerEvents="none" style={styles.centerOverlay} />
      </View>
    </View>
  );
};

const DateOfBirth: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const currentYear = new Date().getFullYear();
  const [day, setDay] = useState(15);
  const [month, setMonth] = useState(6);
  const [year, setYear] = useState(currentYear - 25);

  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => i + 1), []);
  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
  const years = useMemo(
    () => Array.from({ length: 101 }, (_, i) => currentYear - 100 + i).reverse(),
    [currentYear]
  );

  const handleSkip = useCallback(() => {
    navigation.navigate(routes.auth.height);
  }, [navigation]);

  const handleNext = useCallback(() => {
    navigation.navigate(routes.auth.height);
  }, [navigation]);

  const formatMonth = useCallback((m: number) => MONTH_NAMES[m - 1] ?? String(m), []);

  return (
    <WrapperContainer style={styles.container}>
      <OnboardingHeader
        stepIndex={STEP_INDEX}
        totalSteps={TOTAL_STEPS}
        onSkip={handleSkip}
      />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TextComp text="About you" style={styles.title} />
        <TextComp text="Help us personalize your experience" style={styles.subtitle} />
        <TextComp text="What's your date of birth?" style={styles.question} />

        <View style={styles.pickerRow}>
          <PickerColumn
            label="Day"
            data={days}
            selectedValue={day}
            onChange={setDay}
          />
          <PickerColumn
            label="Month"
            data={months}
            selectedValue={month}
            onChange={setMonth}
            formatItem={formatMonth}
          />
          <PickerColumn
            label="Year"
            data={years}
            selectedValue={year}
            onChange={setYear}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <ButtonComp
          title="Next"
          onPress={handleNext}
          variant="premium"
        />
      </View>
    </WrapperContainer>
  );
};

export default DateOfBirth;
