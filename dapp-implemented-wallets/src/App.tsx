import { useCallback } from "react";
import { HandleWalletsUpdate, WidgetWallets } from "@rango-dev/widget-embedded";
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
        // Dapp has implemented these providers
        providers={providers}
        // You can listen to events and get the latest updates
        onUpdateState={handleUpdate}
      >
        <Dapp />
      </WidgetWallets>
    </div>
  );
}
