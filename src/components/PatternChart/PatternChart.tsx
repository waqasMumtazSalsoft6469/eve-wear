import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import { moderateScale, width as screenWidth } from '@/styles/scaling';
import React, { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import styles from './styles';

export interface PatternChartProps {
    value: string;
    label: string;
    change: string;
    changePositive?: boolean;
    data?: { value: number }[];
}

const DEFAULT_DATA = [
    { value: 72 },
    { value: 68 },
    { value: 38 },
    { value: 32 },
    { value: 52 },
    { value: 58 },
    { value: 56 },
    { value: 54 },
    { value: 50 },
];

const CHART_HEIGHT = moderateScale(120);
const FALLBACK_CHART_WIDTH = screenWidth - moderateScale(64);

const PatternChart: React.FC<PatternChartProps> = ({
    value,
    label,
    change,
    changePositive = true,
    data = DEFAULT_DATA,
}) => {
    const [chartWidth, setChartWidth] = useState(FALLBACK_CHART_WIDTH);

    const onChartLayout = (e: LayoutChangeEvent) => {
        const { width } = e.nativeEvent.layout;
        if (width > 0) setChartWidth(width);
    };

    const spacing = chartWidth > 0 ? chartWidth / (data.length - 1) : 0;

    return (
        <View style={styles.card}>
            <View>
                <TextComp text={value} style={styles.value} />
                <View style={styles.labelRow}>
                    <TextComp text={label} style={styles.label} />
                    <TextComp
                        text={change}
                        style={[styles.change, changePositive ? styles.changePositive : styles.changeNegative]}
                    />
                </View>
            </View>
            <View style={styles.chartContainer} onLayout={onChartLayout}>
                <LineChart
                    data={data}
                    areaChart
                    curved
                    height={CHART_HEIGHT}
                    width={chartWidth}
                    color={Colors.secondary}
                    thickness={2}
                    hideDataPoints
                    hideAxesAndRules
                    disableScroll
                    nestedScrollEnabled
                    startFillColor={Colors.secondary}
                    endFillColor={Colors.secondary}
                    startOpacity={0.35}
                    endOpacity={0.05}
                    spacing={spacing}
                    initialSpacing={0}
                    endSpacing={0}
                    backgroundColor="transparent"
                />
            </View>
        </View>
    );
};

export default PatternChart;
