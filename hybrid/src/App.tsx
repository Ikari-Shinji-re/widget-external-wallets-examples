import { useCallback } from "react";
import { WidgetWallets, HandleWalletsUpdate } from "@rango-dev/widget-embedded";
import { Dapp } from "./Dapp";
import { providers } from "./providers";
import "./styles.css";

export default function App() {
  const handleUpdate = useCallback<HandleWalletsUpdate>(
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
        // A combination of wallets that are pre-implemented and wallets that are implemented by Dapp
        providers={providers}
        // You can listen to events and get the latest updates
        onUpdateState={handleUpdate}
      >
        <Dapp />
      </WidgetWallets>
    </div>
  );
}
