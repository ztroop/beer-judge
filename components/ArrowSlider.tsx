import React from 'react';
import { View, Text as RNText, StyleSheet, Dimensions } from 'react-native';
import Svg, { Line, Polygon, Text, G } from 'react-native-svg';

interface ArrowSliderProps {
  /** The starting point of the slider. */
  start: number;
  /** The ending point of the slider. */
  end: number;
  /** The position of the arrow on the slider. */
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
  const sliderWidth = screenWidth * 0.8 - 50;
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
      <RNText style={styles.label}>{start}</RNText>
      <Svg height="50" width={sliderWidth} style={styles.slider}>
        <Line
          x1={padding}
          y1="35"
          x2={sliderWidth - padding}
          y2="35"
          stroke="black"
          strokeWidth="2"
        />
        <G>
          <View
            accessible={true}
            accessibilityLabel={`Arrow position: ${arrowPosition}`}
            testID="arrowPositionLabel"
          >
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
          </View>
          <Polygon
            points={`${arrowX},${arrowWidth / 2 + 25} ${
              arrowX - arrowWidth
            },25 ${arrowX + arrowWidth},25`}
            fill="black"
          />
        </G>
      </Svg>
      <RNText style={styles.label}>{end}</RNText>
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
    maxWidth: 1000,
  },
  label: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  slider: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ArrowSlider;
