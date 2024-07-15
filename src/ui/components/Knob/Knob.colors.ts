import {Theme} from '../ThemeProvider';
import {KnobProps} from './props';

export const useColors = ({variant}: {variant: KnobProps['variant']}) => {
  const theme = Theme;

  switch (variant) {
    case 'tertiary': {
      return {
        containerBackground: {
          idle: theme.colors.white,
          pressed: theme.colors.lightGray6,
          loading: theme.colors.white,
          disabled: theme.colors.lightGray5,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.darkGray,
        },
        loader: {
          idle: theme.colors.darkGray,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.lightGray5,
          disabled: theme.colors.white,
        },
      };
    }
    case 'secondary': {
      return {
        containerBackground: {
          idle: theme.colors.lightGray8,
          pressed: theme.colors.lightGray5,
          loading: theme.colors.lightGray4,
          disabled: theme.colors.lightGray5,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.darkGray,
        },
        loader: {
          idle: theme.colors.darkGray,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.white,
          disabled: theme.colors.white,
        },
      };
    }
    case 'quaternary': {
      return {
        containerBackground: {
          idle: theme.colors.primaryDark2,
          pressed: theme.colors.primaryDark1,
          loading: theme.colors.primary3,
          disabled: theme.colors.lightGray5,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.primary7,
        },
        loader: {
          idle: theme.colors.sky1,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.white,
          disabled: theme.colors.white,
        },
      };
    }
    case 'quinary': {
      return {
        containerBackground: {
          idle: theme.colors.linkLight,
          pressed: theme.colors.link5,
          loading: theme.colors.link,
          disabled: theme.colors.lightGray5,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.link1,
          pressed: theme.colors.link1,
          loading: theme.colors.link1,
        },
        loader: {
          idle: theme.colors.link1,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.white,
          disabled: theme.colors.white,
        },
      };
    }
    case 'whatsApp': {
      const whatsAppDefault = '#60D66A';
      const whatsAppPressed = '#57C360';
      const whatsAppLoading = '#44984B';

      return {
        containerBackground: {
          idle: whatsAppDefault,
          pressed: whatsAppPressed,
          loading: whatsAppLoading,
          disabled: theme.colors.lightGray5,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.white,
          pressed: theme.colors.white,
          loading: theme.colors.white,
        },
        loader: {
          idle: theme.colors.link1,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.white,
          disabled: theme.colors.white,
        },
      };
    }
    case 'primary':
    default:
      return {
        containerBackground: {
          idle: theme.colors.sky6,
          pressed: theme.colors.sky5,
          loading: theme.colors.sky4,
          disabled: theme.colors.lightGray5,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.sky1,
          pressed: theme.colors.sky1,
          loading: theme.colors.sky1,
        },
        loader: {
          idle: theme.colors.sky1,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.white,
          disabled: theme.colors.white,
        },
      };
  }
};
