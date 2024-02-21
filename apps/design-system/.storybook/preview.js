import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { designToken } from '@nx-poc/design-token';

import { createTheme } from '@mui/material/styles';

const designTokenVariables = designToken()

const theme = createTheme({
  palette: {
    primary: {
      main: designTokenVariables.colors.primary.dark,
    },
    secondary: {
      main: designTokenVariables.colors.accent.light,
    },
  },
});

/* snipped for brevity */
export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    light: theme,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
