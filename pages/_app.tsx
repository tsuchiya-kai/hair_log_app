import "/styles/globals.scss";
import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import basicAuthCheck from "../lib/basicAuth"; //basic認証
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res } = appContext.ctx;
  if (req && res) {
    await basicAuthCheck(req, res);
  }

  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
