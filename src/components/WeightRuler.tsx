import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ListRenderItemInfo,
  LayoutChangeEvent,
} from 'react-native';
import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const TICK_WIDTH = moderateScale(28);
const TICK_MINOR_HEIGHT = moderateScale(8);
const TICK_MAJOR_HEIGHT = moderateScale(22);
const INDICATOR_WIDTH = 4;

export interface WeightRulerProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onValueChange: (value: number) => void;
  valueFormat?: (v: number) => string;
}

function buildValues(min: number, max: number, step: number): number[] {
  const values: number[] = [];
  for (let v = min; v <= max; v += step) {
    values.push(Math.round(v * 10) / 10);
  }
  return values;
}

const WeightRuler: React.FC<WeightRulerProps> = ({
  min,
  max,
  step,
  value,
  onValueChange,
  valueFormat = (v) => String(v),
}) => {
  const listRef = useRef<FlatList>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const lastScrollOffsetRef = useRef<number>(0);

  const values = useMemo(() => buildValues(min, max, step), [min, max, step]);
  const valueIndex = useMemo(() => {
    if (values.length === 0) return 0;
    const normalized = step < 1 ? Math.round(value * 10) / 10 : Math.round(value);
    let best = 0;
    let bestDist = Math.abs(values[0] - normalized);
    for (let i = 1; i < values.length; i++) {
      const d = Math.abs(values[i] - normalized);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    return best;
  }, [values, value, step]);

  const isMajorTick = useCallback(
    (v: number) => {
      if (step >= 1) return v % 5 === 0;
      return (v * 10) % 50 === 0;
    },
    [step]
  );

  useEffect(() => {
    if (containerWidth <= 0) return;
    const targetOffset = valueIndex * TICK_WIDTH;
    const maxOffset = Math.max(0, (values.length - 1) * TICK_WIDTH);
    const clampedTarget = Math.max(0, Math.min(targetOffset, maxOffset));
    const currentOffset = lastScrollOffsetRef.current;
    const distance = Math.abs(currentOffset - clampedTarget);
    if (distance <= TICK_WIDTH * 0.6) {
      lastScrollOffsetRef.current = clampedTarget;
      return;
    }
    lastScrollOffsetRef.current = clampedTarget;
    listRef.current?.scrollToOffset({ offset: clampedTarget, animated: false });
  }, [containerWidth, valueIndex, values.length]);

  const handleScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    lastScrollOffsetRef.current = e.nativeEvent.contentOffset.x;
  }, []);

  const handleScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const x = e.nativeEvent.contentOffset.x;
      const index = Math.round(x / TICK_WIDTH);
      const clampedIndex = Math.max(0, Math.min(index, values.length - 1));
      const newValue = values[clampedIndex];
      const maxOffset = Math.max(0, (values.length - 1) * TICK_WIDTH);
      const snapOffset = Math.min(clampedIndex * TICK_WIDTH, maxOffset);
      lastScrollOffsetRef.current = snapOffset;
      if (newValue !== value) {
        onValueChange(newValue);
      }
      listRef.current?.scrollToOffset({ offset: snapOffset, animated: true });
    },
    [values, value, onValueChange]
  );

  const getItemLayout = useCallback(
    (_: unknown, index: number) => ({
      length: TICK_WIDTH,
      offset: TICK_WIDTH * index,
      index,
    }),
    []
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<number>) => {
      const major = isMajorTick(item);
      return (
        <View style={styles.tickCell}>
          <View
            style={[
              styles.tick,
              major ? styles.tickMajor : styles.tickMinor,
            ]}
          />
          {major && (
            <TextComp text={valueFormat(item)} style={styles.tickLabel} />
          )}
        </View>
      );
    },
    [isMajorTick, valueFormat]
  );

  const contentPadding = containerWidth > 0 ? (containerWidth - TICK_WIDTH) / 2 : 0;

  return (
    <View
      style={styles.container}
      onLayout={(e: LayoutChangeEvent) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <FlatList
        ref={listRef}
        data={values}
        keyExtractor={(item) => String(item)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={TICK_WIDTH}
        snapToAlignment="start"
        decelerationRate="fast"
        nestedScrollEnabled
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScrollEnd}
        onScrollEndDrag={handleScrollEnd}
        scrollEventThrottle={16}
        getItemLayout={getItemLayout}
        contentContainerStyle={{
          paddingHorizontal: contentPadding,
        }}
      />
      <View pointerEvents="none" style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(56),
    position: 'relative',
  },
  tickCell: {
    width: TICK_WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tick: {
    width: 2,
    backgroundColor: Colors.gray200,
    marginBottom: moderateScale(4),
  },
  tickMinor: {
    height: TICK_MINOR_HEIGHT,
  },
  tickMajor: {
    height: TICK_MAJOR_HEIGHT,
  },
  tickLabel: {
    fontSize: moderateScale(12),
    fontFamily: fontFamily.regular,
    color: Colors.textSecondary,
  },
  indicator: {
    position: 'absolute',
    left: '50%',
    marginLeft: -INDICATOR_WIDTH / 2,
    top: 0,
    bottom: 0,
    width: INDICATOR_WIDTH,
    backgroundColor: Colors.secondary,
    borderRadius: 2,
  },
});

export default React.memo(WeightRuler);
