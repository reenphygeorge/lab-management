import { extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fontsource/exo-2';

const theme = extendTheme({
  colors: {
    black: {
      25: '#353535',
      50: '#272727',
    },
    gray: {
      25: '#D3D3D3',
      50: '#F0F2F5',
    },
    red: {
      50: '#FE7E7E',
    },
    green: {
      25: '#E0FFED',
      50: '#C1FFDA',
    },
    purple: {
      25: '#E3A7FF',
    },
  },
  fonts: {
    heading: `'Exo 2', sans-serif`,
    body: `'Exo 2', sans-serif`,
  },
});

export default theme;
