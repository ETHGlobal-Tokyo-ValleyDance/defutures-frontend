import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { MetaMaskInpageProvider} from "@metamask/providers"
declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
