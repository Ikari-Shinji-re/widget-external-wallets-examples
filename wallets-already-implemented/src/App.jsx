import { useCallback } from "react";
import { WidgetWallets } from "@rango-dev/widget-embedded";
import { Dapp } from "./Dapp";
import { WALLETS } from "./constants";
import "./styles.css";

export default function App() {
  const handleUpdate = useCallback(
    (providerName, eventType, accounts, providerState, supportedChains) => {
      console.log({
        providerName,
        eventType,
        accounts,
        providerState,
        supportedChains,
      });
    },
    []
  );
  return (
    <div className="App">
      <WidgetWallets
        // List of already implemented wallet providers
        providers={WALLETS}
        // You can listen to events and get the latest updates
        onUpdateState={handleUpdate}
      >
        <Dapp />
      </WidgetWallets>
    </div>
  );
}
