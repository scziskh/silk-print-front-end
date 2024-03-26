import { createGlobalStyle } from 'styled-components';
import { NextIntlClientProvider } from 'next-intl';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import Layout from '@/layouts/main.layout';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <NextIntlClientProvider locale={router.locale} timeZone="Europe/Kyiv" messages={pageProps.messages}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>
  );
};

export default MyApp;

const GlobalStyle = createGlobalStyle`
:root {
  --mainColor: #1f2129;
  --mainGrad: linear-gradient(60deg, #313131 0%, #313739 100%);;
  --secondaryColor: #d4af37;
  --secondaryGrad: linear-gradient(60deg, #d4af37 0%, #bf9b30 100%);
  --contrastGrad: linear-gradient(60deg, rgba(252,252,255,1) 0%, rgba(240,240,242,1) 100%);
  --contrastColor: white;
  --transitionDuration: 0.25s;
  --darkShadow: 1px 0px 6px rgba(0, 0, 0, 0.3);
  --lightShadow: 1px 0px 6px rgba(255, 255, 255, 0.5);
}`;
