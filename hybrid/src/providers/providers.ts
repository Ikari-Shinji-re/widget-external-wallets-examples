import { ProviderInterface } from "@rango-dev/wallets-core";
import { metamaskProvider } from "./metamaskProvider";

export const providers: (ProviderInterface | string)[] = [
  /*
   *  We have already implemented this provider. This is only for demonstration purposes.
   *  To use an external wallet provider that is not yet supported by us, you can create your own implementation of the Provider interface and pass it to the widget.
   */
  metamaskProvider,
  // Use a provider that is already implemented.
  "coinbase",
];
