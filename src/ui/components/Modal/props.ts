import {UseTestIDProps} from '../../hooks/useTestID/useTestID';
import {Theme} from '../ThemeProvider';

export type ModalProps = {
  /**
   * title of modal
   **/
  title?: string;

  /**
   * description of modal
   **/
  description?: string;

  /**
   * JSX element icons etc
   **/
  illustration?: JSX.Element;

  /**
   * JSX element for footer single button or double button
   **/
  footer?: JSX.Element;

  /**
   * boolean flag to show and hide modal
   **/
  isVisible?: boolean;

  /**
   * Handles close button press
   **/
  onClose?: () => void;

  /**
   * Modal variant
   * 'default' -> there is margin between modal container and screen borders
   * 'full-width' -> no bottom and horizontal margin of the modal container
   * 'full-height' -> modal container almost fully covers the screen
   * 'overlay' -> modal container that covers the whole screen
   *
   * @default 'default'
   */
  variant?: 'default' | 'full-width' | 'full-height' | 'overlay';

  /**
   * If set to true, the modal will have showing/closing animation
   *
   * @default true
   */
  isAnimated?: boolean;

  /**
   * Body background color
   *
   * @default "white"
   */
  backgroundColor?: keyof (typeof Theme)['colors'];
} & UseTestIDProps;
