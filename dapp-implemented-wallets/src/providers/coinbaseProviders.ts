import {
  config,
  getInstance,
  connect,
  subscribe,
  canSwitchNetworkTo,
  switchNetwork,
  getSigners,
  getWalletInfo,
} from "@rango-dev/provider-coinbase";
import { ProviderInterface } from "@rango-dev/wallets-core";

export const coinbaseProvider: ProviderInterface = {
  config,
  getInstance,
  connect,
  subscribe,
  canSwitchNetworkTo,
  switchNetwork,
  getSigners,
  getWalletInfo,
};
