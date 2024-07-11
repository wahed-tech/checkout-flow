import {Theme} from '../../components/ThemeProvider';

export type UsePaddingProps = {
  /**
   * Padding around the component
   */
  padding?: keyof (typeof Theme)['spacing'];
  /**
   * Padding on the left side of the component
   */
  paddingStart?: keyof (typeof Theme)['spacing'];
  /**
   * Padding on the right side of the component
   */
  paddingEnd?: keyof (typeof Theme)['spacing'];
  /**
   * Padding on the top side of the component
   */
  paddingTop?: keyof (typeof Theme)['spacing'];
  /**
   * Padding on the bottom side of the component
   */
  paddingBottom?: keyof (typeof Theme)['spacing'];
  /**
   * Padding on the top and bottom side of the component
   */
  paddingVertical?: keyof (typeof Theme)['spacing'];
  /**
   * Padding on the left and right side of the component
   */
  paddingHorizontal?: keyof (typeof Theme)['spacing'];
};
