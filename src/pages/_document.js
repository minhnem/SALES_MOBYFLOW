import Document, { Html, Head, Main, NextScript } from 'next/document';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="vi" className="scroll-smooth">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#139091" />
          <meta name="application-name" content="MOBYFLOW" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="MOBYFLOW" />
          <meta name="format-detection" content="telephone=no" />

          {/* Icons & Manifest */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/favicon.svg" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Google Fonts Preconnect for Optimal Core Web Vitals */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
