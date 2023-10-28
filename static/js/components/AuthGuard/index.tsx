import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
// -------------------------------------------------------------------------------------------------------------

import { currentNetwork } from "utils";
// -------------------------------------------------------------------------------------------------------------

export default function AuthGuard({ children }) {
  const { connector, library, chainId, account, active } = useWeb3React();
  const history = useHistory();
  // --------------------------

  // ---- Auth Guard ----
  // ---- For Protected Routes ----
  useEffect(() => {
    const isLoggedin =
      account && active && chainId === parseInt(currentNetwork, 10);
    if (!isLoggedin) {
      history.push("/");
    }
  }, [connector, library, account, active, chainId, history]);

  return children;
}
