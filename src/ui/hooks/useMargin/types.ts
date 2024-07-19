import {Theme} from '../../components/ThemeProvider';

export type Spacing = keyof (typeof Theme)['spacing'];

export type SpacingWithNegative = `-${Spacing}` | Spacing;

export type UseMarginProps = {
  /**
   * Margin around the component
   */
  margin?: `-${Spacing}` | Spacing;
  /**
   * Margin on the left side of the component
   */
  marginStart?: `-${Spacing}` | Spacing;
  /**
   * Margin on the right side of the component
   */
  marginEnd?: `-${Spacing}` | Spacing;
  /**
   * Margin on the top side of the component
   */
  marginTop?: `-${Spacing}` | Spacing;
  /**
   * Margin on the bottom side of the component
   */
  marginBottom?: `-${Spacing}` | Spacing;
  /**
   * Margin on the top and bottom side of the component
   */
  marginVertical?: `-${Spacing}` | Spacing;
  /**
   * Margin on the left and right side of the component
   */
  marginHorizontal?: `-${Spacing}` | Spacing;
};
