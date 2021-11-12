import App from "next/app";
import Layout from "@components/layout";
import basicAuthCheck from "../lib/basicAuth";
import type { AppProps, AppContext } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "/styles/globals.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * 【共通レイアウト設定】
 * NOTE: page component でgetLayout関数が設定された（= layoutが指定された）場合はそちらを適用
 * そうでない場合はデフォルトのlayoutを適用する
 *
 * 例）
 * import type { ReactElement } from "react";
 * TopPage.getLayout = function getLayout(page: ReactElement) {
 * return <Layout>{page}</Layout>;
 * };
 *
 * 参考: https://nextjs.org/docs/basic-features/layouts#per-page-layouts
 */
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

// basic認証
MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res } = appContext.ctx;
  if (req && res) {
    await basicAuthCheck(req, res);
  }

  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
