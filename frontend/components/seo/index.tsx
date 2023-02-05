import React from "react";
import Head from "next/head";

const SeoComponent = () => {
  return (
    <Head>
      <meta name="description" content=""/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <meta name="theme-color" content="#000"/>
      <meta name="msapplication-navbutton-color" content="#000"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="#000"/>

      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="description" content={"description"} key="desc"/>

      <meta charSet="utf-8"/>

      <meta name="format-detection" content="telephone=no"/>
      <meta
        name="theme-color"
        id="head-theme-color"
        content={"appColors.primary"}
      />
      <meta
        name="msapplication-TileColor"
        id="head-title-color"
        content={"appColors.primary"}
      />

      <meta name="msapplication-TileColor" content="#009eff"/>
      <meta name="msapplication-tap-highlight" content="no"/>
      <meta name="msapplication-config" content="none"/>

      <meta
        property="og:image"
        // content={`${siteURL}/icon.svg`}
        key={"ogimage"}
      />
      <meta property="og:image:type" content="png" key={"ogimagetype"}/>
      <meta property="og:type" content="website" key={"ogtype"}/>
      <meta
        property="og:title"
        // content={`${t("seoContent")}  - ${APP_INFO.name}`}
        key={"ogtitle"}
      />
      {/* <meta property="og:description" content={description} key={"ogdesc"} />
      <meta property="og:url" content={`${siteURL}`} key={"ogurl"} /> */}
      <meta property="og:locale" content={"ru"} key={"oglocale"}/>

      <link
        rel="preconnect"
        href={process.env.NEXT_PUBLIC_BASE_URL}
        key="url-api"
      />
      <link
        rel="canonical"
        // href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        // key={router.asPath}
      />

      <title>Экосистема современных IT-решений saf.tatar</title>
    </Head>
  );
};

export default SeoComponent;
