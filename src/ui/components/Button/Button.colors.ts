import {Theme} from '../ThemeProvider';
import {ButtonProps} from './types';

export const useColors = ({variant}: {variant: ButtonProps['variant']}) => {
  const theme = Theme;

  switch (variant) {
    case 'primaryInverted': {
      return {
        containerBackground: {
          idle: theme.colors.white,
          pressed: theme.colors.white,
          loading: theme.colors.white,
          disabled: theme.colors.lightGray5,
        },
        text: {
          idle: theme.colors.sky2,
          pressed: theme.colors.sky2,
          loading: theme.colors.sky2,
          disabled: theme.colors.lightGray4,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.sky2,
          pressed: theme.colors.sky2,
          loading: theme.colors.sky2,
        },
        loader: {
          idle: theme.colors.sky2,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.lightGray6,
          disabled: theme.colors.white,
        },
      };
    }
    case 'tertiary': {
      return {
        containerBackground: {
          idle: theme.colors.primaryDark2,
          pressed: theme.colors.primaryDark1,
          loading: theme.colors.primary3,
          disabled: theme.colors.lightGray5,
        },
        text: {
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.darkGray,
          disabled: theme.colors.lightGray4,
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

    case 'secondary': {
      return {
        containerBackground: {
          idle: theme.colors.linkLight,
          pressed: theme.colors.link5,
          loading: theme.colors.link,
          disabled: theme.colors.lightGray5,
        },
        text: {
          idle: theme.colors.link1,
          pressed: theme.colors.link1,
          loading: theme.colors.link1,
          disabled: theme.colors.lightGray4,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.link1,
          pressed: theme.colors.link1,
          loading: theme.colors.link1,
        },
        loader: {
          idle: theme.colors.white,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.link1,
          disabled: theme.colors.white,
        },
      };
    }

    case 'minimal': {
      return {
        containerBackground: {
          idle: theme.colors.linkLight,
          pressed: theme.colors.link5,
          loading: theme.colors.link,
          disabled: theme.colors.lightGray5,
        },
        text: {
          idle: theme.colors.link1,
          pressed: theme.colors.link1,
          loading: theme.colors.link1,
          disabled: theme.colors.lightGray4,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.link1,
          pressed: theme.colors.link1,
          loading: theme.colors.link1,
        },
        loader: {
          idle: theme.colors.white,
          disabled: theme.colors.lightGray4,
        },
        loaderTrack: {
          idle: theme.colors.link1,
          disabled: theme.colors.white,
        },
      };
    }

    case 'quaternary': {
      return {
        containerBackground: {
          idle: theme.colors.white,
          pressed: theme.colors.lightGray6,
          loading: theme.colors.lightGray8,
          disabled: theme.colors.lightGray5,
        },
        text: {
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.darkGray,
          disabled: theme.colors.lightGray4,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.darkGray,
        },
        loader: {
          idle: theme.colors.darkGray,
          disabled: theme.colors.darkGray,
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
          idle: theme.colors.white,
          pressed: theme.colors.lightGray6,
          loading: theme.colors.lightGray8,
          disabled: theme.colors.lightGray5,
        },
        text: {
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.darkGray,
          disabled: theme.colors.lightGray4,
        },
        icon: {
          disabled: theme.colors.lightGray4,
          idle: theme.colors.darkGray,
          pressed: theme.colors.darkGray,
          loading: theme.colors.darkGray,
        },
        loader: {
          idle: theme.colors.darkGray,
          disabled: theme.colors.darkGray,
        },
        loaderTrack: {
          idle: theme.colors.white,
          disabled: theme.colors.white,
        },
      };
    }

    default: {
      return {
        containerBackground: {
          idle: theme.colors.sky6,
          pressed: theme.colors.sky5,
          loading: theme.colors.sky4,
          disabled: theme.colors.lightGray5,
        },
        text: {
          idle: theme.colors.sky1,
          pressed: theme.colors.sky1,
          loading: theme.colors.sky1,
          disabled: theme.colors.lightGray4,
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
  }
};
