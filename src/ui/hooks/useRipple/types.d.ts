export type UseRippleProps = {
  /**
   * Ripple width
   * If not set then will be 2x of ripple container
   */
  width?: number;
  /**
   * Ripple height
   * If not set then will be 2x of ripple container
   */
  height?: number;

  /**
   * Ripple color
   * Black by default
   */
  color?: string;

  /**
   * Ripple max opacity
   * from 0 to 1.
   * Default is 0.5
   */
  maxOpacity?: number;
};

export type UseRippleReturn = {
  /**
   * Ripple jsx. Please place it within relatively positioned container.
   * It will use container's width and height.
   */
  ripple: React.ReactElement | null;

  /**
   * This callback controls the start of the ripple effect.
   * Place this callback onto the pressable component pressIn prop
   */
  onPressIn(): void;

  /**
   * This callback controls the stop of the ripple effect.
   * Place this callback onto the pressable component pressIn prop
   */
  onPressOut(): void;
};
