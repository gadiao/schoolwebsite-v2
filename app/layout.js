import { Footer } from '_components';
import { Header } from '_components/header'
import { ThemeRegistry } from '_helpers/client/themeregistry';

export const metadata = {
  title: 'Next.js 13 - User Registration and Login Example'
}

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;