import {designToken} from 'design-token/src/lib/design-token';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom Material UI themes */

const defaultTheme = designToken();

const withThemeProvider = (Story, context) => {
  {console.log('context', context)}
  return (
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
  );
};

export const decorators = [withThemeProvider, withThemeFromJSXProvider({
  GlobalStyles: CssBaseline,
  Provider: ThemeProvider,
  themes: {
    defaultTheme,
  },
  defaultTheme: 'defaultTheme',
})];
