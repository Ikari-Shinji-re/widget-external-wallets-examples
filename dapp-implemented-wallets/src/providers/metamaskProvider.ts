import {
  config,
  getInstance,
  connect,
  subscribe,
  canSwitchNetworkTo,
  switchNetwork,
  getSigners,
  getWalletInfo,
} from "@rango-dev/provider-metamask";
import { ProviderInterface } from "@rango-dev/wallets-core";

export const metamaskProvider: ProviderInterface = {
  config,
  getInstance,
  connect,
  subscribe,
  canSwitchNetworkTo,
  switchNetwork,
  getSigners,
  getWalletInfo,
};
