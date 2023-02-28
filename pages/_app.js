// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {

  const dark = createTheme({
    type: 'dark',
    theme: {
      colors: {
        // brand colors
        background: '#1d1d1d',
        text: '#ffff',
        // you can also create your own color
        myDarkColor: '#ff4ecd'
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })

  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={dark}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
