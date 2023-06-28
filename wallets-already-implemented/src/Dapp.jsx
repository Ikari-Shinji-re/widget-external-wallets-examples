import { useCallback } from "react";
import { useWallets, Widget } from "@rango-dev/widget-embedded";
import { WALLETS } from "./constants";

function ExternalWallet({ providerName }) {
  const { state, connect, disconnect } = useWallets();
  const providerState = state(providerName);
  const handleClick = useCallback(() => {
    const providerState = state(providerName);
    if (providerState.connected) {
      disconnect(providerName);
    } else {
      connect(providerName);
    }
  }, [providerName, state, connect, disconnect]);
  return (
    <button
      disabled={!state(providerName).installed}
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
  const widgetConfig = { externalWallets: true, wallets: WALLETS };
  return (
    <div className="main-container">
      <div className="wallets-container">
        {WALLETS.map((providerName) => (
          <ExternalWallet providerName={providerName} />
        ))}
      </div>
      <Widget config={widgetConfig} />
    </div>
  );
}
