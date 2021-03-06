import { Container } from "@material-ui/core/";
import Head from "next/head";
import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../components/store";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Provider store={store}>
        <Container maxWidth="xl">
          <Header />
          <Component {...pageProps} />
        </Container>
      </Provider>
    </>
  );
}
export default App;
