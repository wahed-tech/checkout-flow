import React, {FC, PropsWithChildren} from 'react';
import {ThemeProvider as BaseThemeProvider, Theme} from '@emotion/react';

export const ThemeProvider: FC<
  PropsWithChildren<{
    theme: Theme;
  }>
> = ({theme, children}) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
