import { useCallback } from "react";
import { useWallets, Widget } from "@rango-dev/widget-embedded";
import { WALLETS } from "./constants";

function ExternalWallet({ providerName }) {
  const { state, connect, disconnect } = useWallets();
  const providerState = state(providerName);
  const handleClick = useCallback(() => {
    try {
      if (providerState.connected) {
        disconnect(providerName);
      } else {
        connect(providerName);
      }
    } catch (error) {
      console.error(error);
    }
  }, [providerName, providerState, connect, disconnect]);
  return (
    <button
      disabled={!providerState.installed}
      className="external-wallet"
      onClick={handleClick}
    >
      {providerState.connected
        ? `disconnect ${providerName}`
        : `connect ${providerName}`}
    </button>
  );
}

export function Dapp() {
  const widgetConfig = {
    externalWallets: true,
    wallets: WALLETS,
    // This API key is only for test purpose. Don't use it in production.
    apiKey: "c6381a79-2817-4602-83bf-6a641a409e32",
  };
  return (
    <div className="main-container">
      <div className="wallets-container">
        {WALLETS.map((providerName, index) => (
          <ExternalWallet providerName={providerName} key={index} />
        ))}
      </div>
      <Widget config={widgetConfig} />
    </div>
  );
}
