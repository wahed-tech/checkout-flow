import {useTheme as baseUseTheme} from '@emotion/react';

import {Theme} from '../components/ThemeProvider';

/**
 * This hook returns a theme object which contains all the theme variables
 */
export const useTheme: () => typeof Theme = baseUseTheme as () => typeof Theme;
