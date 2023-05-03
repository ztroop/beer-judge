import React from 'react';
import { render } from '@testing-library/react-native';
import GradientRectangle from '../components/SRMGradient';

describe('GradientRectangle', () => {
  test('renders the gradient rectangle with correct text', () => {
    const srmValue1 = 5;
    const srmValue2 = 15;
    const { getByText } = render(
      <GradientRectangle srmValue1={srmValue1} srmValue2={srmValue2} />
    );

    // Check if the text is rendered correctly
    expect(getByText(`SRM ${srmValue1} - SRM ${srmValue2}`)).toBeTruthy();
  });

  test('renders the gradient rectangle with the correct number of layers', () => {
    const srmValue1 = 5;
    const srmValue2 = 15;
    const numLayers = 10;
    const { getAllByTestId } = render(
      <GradientRectangle srmValue1={srmValue1} srmValue2={srmValue2} />
    );

    // Check if the correct number of gradient layers is rendered
    const layers = getAllByTestId('gradientLayer');
    expect(layers.length).toBe(numLayers);
  });
});
