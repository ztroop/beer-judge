import React from 'react';
import { View, Text as RNText, StyleSheet, Dimensions } from 'react-native';
import Svg, { Line, Polygon, Text, G } from 'react-native-svg';

interface ArrowSliderProps {
  start: number;
  end: number;
  arrowPosition: number;
}

/**
 * ArrowSlider component creates a horizontal slider with a start and end point,
 * and it draws an arrow at the specified position with a label.
 */
const ArrowSlider: React.FC<ArrowSliderProps> = ({
  start,
  end,
  arrowPosition,
}) => {
  const screenWidth = Dimensions.get('window').width;
  const sliderWidth = screenWidth * 0.8;
  const arrowWidth = 10;
  const padding = 20;

  /**
   * Calculates the arrow position in the slider based on the given arrowPosition prop.
   * @returns The calculated arrow position on the slider.
   */
  const calculateArrowPosition = (): number => {
    const range = end - start;
    const positionPercentage = (arrowPosition - start) / range;
    return positionPercentage * (sliderWidth - 2 * padding);
  };

  const arrowX = calculateArrowPosition() + padding;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <RNText style={styles.label}>{start}</RNText>
      </View>
      <Svg
        height="50"
        width={sliderWidth}
        style={styles.slider}
        accessible={true}
        accessibilityLabel={`Arrow position: ${arrowPosition}`}
        testID="arrowPositionLabel"
      >
        <Line
          x1={padding}
          y1="35"
          x2={sliderWidth - padding}
          y2="35"
          stroke="black"
          strokeWidth="2"
        />
        <G>
          <Text
            x={arrowX}
            y="20"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            fill="black"
          >
            {arrowPosition}
          </Text>
          <Polygon
            points={`${arrowX},${arrowWidth / 2 + 25} ${
              arrowX - arrowWidth
            },25 ${arrowX + arrowWidth},25`}
            fill="black"
          />
        </G>
      </Svg>
      <View style={styles.labelContainer}>
        <RNText style={styles.label}>{end}</RNText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  labelContainer: {
    width: 30,
  },
  label: {
    fontSize: 16,
  },
  slider: {
    flex: 1,
  },
});

export default ArrowSlider;
