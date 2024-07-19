import {Platform} from 'react-native';

import {getFont, getWithDimension} from '../../utils';
import {Theme} from '../ThemeProvider';

export const useStyles = () => {
  const isMobile = Platform.OS !== 'web';
  const theme = Theme;
  const font = getFont({
    languageCode: theme.languageCode,
    isRtl: theme.direction === 'rtl',
  });

  return {
    base: {
      margin: 0,
      padding: 0,
      fontWeight: isMobile ? undefined : 'normal',
      fontSize: 16,
      lineHeight: getWithDimension(20),
      color: theme.colors.darkGray,
      fontFamily: font.regular,
      textAlignVertical: 'center',
    },
    ellipsizeTail: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    textAlign: {
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: isMobile ? 'right' : 'end',
      },
      start: {
        textAlign: isMobile ? 'left' : 'start',
      },
    },
    variants: {
      mainHeading1: {
        fontWeight: isMobile ? undefined : '600',
        fontSize: 64,
        lineHeight: getWithDimension(84),
        fontFamily: font.semiBold,
      },
      mainHeading2: {
        fontWeight: isMobile ? undefined : '600',
        fontSize: 48,
        lineHeight: getWithDimension(64),
        fontFamily: font.semiBold,
      },
      headline1: {
        fontWeight: isMobile ? undefined : 'bold',
        fontSize: 34,
        lineHeight: getWithDimension(46),
        fontFamily: font.bold,
      },
      headline2: {
        fontSize: 30,
        fontWeight: isMobile ? undefined : 'bold',
        lineHeight: getWithDimension(40),
        fontFamily: font.bold,
      },
      headline3: {
        fontSize: 24,
        fontWeight: isMobile ? undefined : 'bold',
        lineHeight: getWithDimension(32),
        fontFamily: font.bold,
      },
      headline4: {
        fontSize: 20,
        fontWeight: isMobile ? undefined : 'bold',
        lineHeight: getWithDimension(28),
        fontFamily: font.bold,
      },
      headline5: {
        fontSize: 18,
        fontWeight: isMobile ? undefined : 'bold',
        lineHeight: getWithDimension(24),
        fontFamily: font.bold,
      },

      label1: {
        fontSize: 18,
        fontWeight: isMobile ? undefined : '500',
        lineHeight: getWithDimension(28),
        fontFamily: font.interMedium,
      },
      label2: {
        fontSize: 16,
        fontWeight: isMobile ? undefined : '500',
        lineHeight: getWithDimension(24),
        fontFamily: font.interMedium,
      },
      label3: {
        fontSize: 14,
        fontWeight: isMobile ? undefined : '500',
        lineHeight: getWithDimension(24),
        fontFamily: font.interMedium,
      },
      label4: {
        fontSize: 12,
        fontWeight: isMobile ? undefined : '500',
        lineHeight: getWithDimension(24),
        fontFamily: font.interMedium,
      },
      body1: {
        fontSize: 20,
        lineHeight: getWithDimension(28),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
      },
      body1underlined: {
        fontSize: 20,
        lineHeight: getWithDimension(28),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
        textDecorationLine: 'underline',
      },
      body1italics: {
        fontSize: 20,
        lineHeight: getWithDimension(28),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.italic,
        fontStyle: 'italic',
      },
      body2: {
        fontSize: 18,
        lineHeight: getWithDimension(24),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
      },
      body2underlined: {
        fontSize: 18,
        lineHeight: getWithDimension(24),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
        textDecorationLine: 'underline',
      },
      body2italics: {
        fontSize: 18,
        lineHeight: getWithDimension(24),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.italic,
        fontStyle: 'italic',
      },
      body3: {
        fontSize: 16,
        lineHeight: getWithDimension(20),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
      },
      body3underlined: {
        fontSize: 16,
        lineHeight: getWithDimension(20),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
        textDecorationLine: 'underline',
      },
      body3italics: {
        fontSize: 16,
        lineHeight: getWithDimension(20),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.italic,
        fontStyle: 'italic',
      },
      body4: {
        fontSize: 14,
        lineHeight: getWithDimension(20),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
      },
      body4underlined: {
        fontSize: 14,
        lineHeight: getWithDimension(20),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
        textDecorationLine: 'underline',
      },
      body4italics: {
        fontSize: 14,
        lineHeight: getWithDimension(20),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.italic,
        fontStyle: 'italic',
      },
      body5: {
        fontSize: 12,
        lineHeight: getWithDimension(18),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
      },
      body5underlined: {
        fontSize: 12,
        lineHeight: getWithDimension(18),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
        textDecorationLine: 'underline',
      },
      body5italics: {
        fontSize: 12,
        lineHeight: getWithDimension(18),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.italic,
        fontStyle: 'italic',
      },
      body6: {
        fontSize: 10,
        lineHeight: getWithDimension(14),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
      },
      body6underlined: {
        fontSize: 10,
        lineHeight: getWithDimension(14),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.regular1,
        textDecorationLine: 'underline',
      },
      body6italics: {
        fontSize: 10,
        lineHeight: getWithDimension(14),
        fontWeight: isMobile ? undefined : '400',
        fontFamily: font.italic,
        fontStyle: 'italic',
      },
    },
  };
};
