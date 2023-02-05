import React from "react";
import SeoComponent from "../components/seo";
import AppLayout from "../layout";
import {EmotionCache} from "@emotion/cache";
import {CacheProvider} from "@emotion/react";
import type {AppProps} from "next/app";
import createEmotionCache from "../lib/createEmotionCache";
import QueryProvider from "../providers/query";
import ToastConfigContainer from "../components/toast-config";
import "../public/global.scss";
import "../public/sass/style.scss";
import "../public/toastify.scss";
import "react-toastify/dist/ReactToastify.css";
import {IsFulledHeader} from "../hooks/is-fulled-header";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: any;
}

function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  const isFulledHeader = IsFulledHeader();

  return (
    <>
      <SeoComponent/>
      <ToastConfigContainer/>
      <QueryProvider dehydratedState={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <AppLayout component={Component} isFulledHeader={isFulledHeader}>
            <Component {...pageProps} />
          </AppLayout>
        </CacheProvider>
      </QueryProvider>
    </>
  );
}

export default MyApp;
