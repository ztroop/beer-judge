import React from 'react';
import { render } from '@testing-library/react-native';
import ArrowSlider from '../components/ArrowSlider';

describe('ArrowSlider', () => {
  test('renders the slider with the correct arrow position', () => {
    const start = 0;
    const end = 10;
    const arrowPosition = 5;
    const { getByText, getByTestId } = render(
      <ArrowSlider start={start} end={end} arrowPosition={arrowPosition} />
    );

    // Check if start and end labels are rendered
    expect(getByText(start.toString())).toBeTruthy();
    expect(getByText(end.toString())).toBeTruthy();

    // Check if arrow position label exists in the output
    const arrowPositionLabel = getByTestId('arrowPositionLabel');
    expect(arrowPositionLabel).toBeTruthy();
    expect(arrowPositionLabel.props.accessibilityLabel).toBe(
      `Arrow position: ${arrowPosition}`
    );
  });
});
