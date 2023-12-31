import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <NextUIProvider>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </NextUIProvider>
    </>
  );
}
