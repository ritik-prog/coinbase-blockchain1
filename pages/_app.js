import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import Script from "next/script";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Script>
        alert( 'This website includes\n 1.Connect Wallet\n 2.send/receive own
        created coins\n 3.calculate balance of available balance\n Note :-
        Thirdweb is used to create this application and send, recive, qr code
        and copy wallet address option is created only' )
      </Script>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
