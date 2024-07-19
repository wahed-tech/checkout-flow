import {AccessibilityRole} from 'react-native';

export type AccessibilityProps = {
  /**
   * Communicates the purpose of component e.g. button, alert
   * If set, will add role to element
   */
  role?: AccessibilityRole;

  /**
   * Tells user what element has been selected
   * When set, VoiceOver reads string when user selects element
   */
  label?: string;

  /**
   * Helps users understand what will happen when they perform an action.
   * Set when the result is not clear from the accessibility label.
   */
  hint?: string;
};
