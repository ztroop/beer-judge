import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const interpolateColor = (color1, color2, ratio) => {
  const r = color1.r + (color2.r - color1.r) * ratio;
  const g = color1.g + (color2.g - color1.g) * ratio;
  const b = color1.b + (color2.b - color1.b) * ratio;
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
};

const srmToRgb = (srm) => {
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
        style={[styles.gradientLayer, { backgroundColor: color }]}
      />
    );
  }

  return (
    <View style={styles.rectangle}>
      <View style={styles.gradient}>{layers}</View>
      <Text style={styles.text}>
        SRM {srmValue1} - SRM {srmValue2}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  gradientLayer: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    zIndex: 2,
  },
});

export default GradientRectangle;
