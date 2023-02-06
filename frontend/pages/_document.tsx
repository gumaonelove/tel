import * as React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../lib/createEmotionCache";


export default class MyDocument extends Document {
  render() {

    return (
      <Html lang="ru">
        <Head>
          <meta name="application-name" content={"TelSafTatar"}/>
          <meta name="format-detection" content="telephone=no"/>
          <meta property="og:site_name" content={"TelSafTatar"} key={"ogsitename"}/>
          <meta property="og:locale" content={"ru"} key={"oglocale"}/>
          <link rel="icon" href="/icons/favicon/favicon.svg"/>
          <link rel="shortcut icon" href="/icons/favicon/favicon.ico"/>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon/favicon-16x16.png"
          />
          <meta
            name="msapplication-TileImage"
            content="/icons/favicon/ms-icon-144x144.png"
          ></meta>
          {/*<link*/}
          {/*  rel="preconnect"*/}
          {/*  href={process.env.NEXT_PUBLIC_BASE_URL}*/}
          {/*  key="url-api"*/}
          {/*/>*/}
          {/*<link*/}
          {/*  rel="canonical"*/}
          {/*  href={`${process.env.NEXT_PUBLIC_SITE_URL}`}*/}
          {/*  // key={asPath}*/}
          {/*/>*/}

          {/*<link*/}
          {/*  rel="stylesheet"*/}
          {/*  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"*/}
          {/*/>*/}
          {/*<link*/}
          {/*  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"*/}
          {/*  rel="stylesheet"*/}
          {/*/>*/}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const {extractCriticalToChunks} = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: style.css}}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
