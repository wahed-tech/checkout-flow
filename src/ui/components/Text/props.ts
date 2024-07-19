import {Theme} from '../../components/ThemeProvider';
import {UseMarginProps, UseTestIDProps} from '../../hooks';
export type TextProps = {
  /**
   * Web only: if set, will change html tag of the component
   */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'strong';
  /**
   * Variant of the text from design system
   */
  variant?: UseStyles['variants'];
  /**
   * Color of the text from design system
   */
  color?: keyof (typeof Theme)['colors'];

  /**
   * Text alignment
   *
   * `start` - text will be aligned to the left if ltr or right if rtl
   * `end` - text will be aligned to the right if ltr or left if rtl
   * `center` - text will be centered
   */
  textAlign?: UseStyles['textAlign'];

  /**
   * Where to show ellipsis
   *
   * `tail` - abcd...
   */
  ellipsizeMode?: 'tail';

  /**
   * If set, will truncate the text to `numberOfLines` lines.
   * Will only work if `ellipsizeMode` is set
   */
  numberOfLines?: number;

  /**
   * Handles press events.
   */
  onPress?: () => void;
} & UseMarginProps &
  UseTestIDProps;

type UseStyles = {
  /**
   * Variant of the text from design system
   */
  variants:
    | 'mainHeading1'
    | 'mainHeading2'
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'label1'
    | 'label2'
    | 'label3'
    | 'label4'
    | 'body1'
    | 'body1underlined'
    | 'body1italics'
    | 'body2'
    | 'body2underlined'
    | 'body2italics'
    | 'body3'
    | 'body3underlined'
    | 'body3italics'
    | 'body4'
    | 'body4underlined'
    | 'body4italics'
    | 'body5'
    | 'body5underlined'
    | 'body5italics'
    | 'body6'
    | 'body6underlined'
    | 'body6italics';

  /**
   * Text alignment
   *
   * `start` - text will be aligned to the left if ltr or right if rtl
   * `end` - text will be aligned to the right if ltr or left if rtl
   * `center` - text will be centered
   */
  textAlign: 'start' | 'end' | 'center';
};
