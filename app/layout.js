import * as React from 'react';
import { Header, Footer } from '_components';
import { ThemeRegistry } from '_helpers/client/themeregistry';

import { auth } from '_helpers/server';

export const metadata = {
  title: 'Next.js 13 - User Registration and Login Example'
}

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header loggedin={auth.isAuthenticated()}/>
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;