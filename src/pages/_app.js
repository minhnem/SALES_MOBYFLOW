import React from 'react';
import Head from 'next/head';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import viVN from 'antd/locale/vi_VN';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <ConfigProvider
        locale={viVN}
        theme={{
          token: {
            colorPrimary: '#139091',
            borderRadius: 8,
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}
