import React from 'react';
import { View, Text } from 'react-native';
import { gradientStyle } from '../styles';

type Color = {
  r: number;
  g: number;
  b: number;
};

const interpolateColor = (
  color1: Color,
  color2: Color,
  ratio: number
): string => {
  const r = color1.r + (color2.r - color1.r) * ratio;
  const g = color1.g + (color2.g - color1.g) * ratio;
  const b = color1.b + (color2.b - color1.b) * ratio;
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
};

const srmToRgb = (srm: number): Color => {
  const r = Math.round(Math.min(255, Math.max(0, 255 * 0.975 ** srm)));
  const g = Math.round(Math.min(255, Math.max(0, 245 * 0.88 ** srm)));
  const b = Math.round(Math.min(255, Math.max(0, 220 * 0.7 ** srm)));
  return { r, g, b };
};

const GradientRectangle = ({ srmValue1, srmValue2 }) => {
  const color1 = srmToRgb(srmValue1);
  const color2 = srmToRgb(srmValue2);

  const layers = [];
  const numLayers = 10;

  for (let i = 0; i < numLayers; i++) {
    const ratio = i / (numLayers - 1);
    const color = interpolateColor(color1, color2, ratio);
    layers.push(
      <View
        key={i}
        testID="gradientLayer"
        style={[gradientStyle.gradientLayer, { backgroundColor: color }]}
      />
    );
  }

  return (
    <View style={gradientStyle.rectangle}>
      <View style={gradientStyle.gradient}>{layers}</View>
      <Text style={gradientStyle.text}>
        SRM {srmValue1} - SRM {srmValue2}
      </Text>
    </View>
  );
};

export default GradientRectangle;
