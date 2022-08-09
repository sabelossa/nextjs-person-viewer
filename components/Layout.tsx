import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

function Layout({ title }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}

export default Layout;
