import toast from "react-hot-toast";
import useAuth from "hooks/useAuth";
import XIcon from "components/icons/XIcon";
// -------------------------------------------------------------------------------------------------------------

export default function WalletConnect({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // -----------
  const { login } = useAuth();

  // ----- Metamask Connect Handler -----
  const connectMetamask = () => {
    // @ts-ignore
    if (typeof window.ethereum === "undefined") {
      toast.error("Metamask not found", {
        style: {
          border: "1px solid #ccc",
          padding: "5px 10px",
          color: "#713200",
        },
      });
      return;
    }
    login(1);
    onClose();
  };

  // ----- Wallet Connect Handler -----
  const connectWalletConnector = () => {
    login(2);
    onClose();
  };

  // ----- Coinbase Wallet Handler -----
  const connectCoinbase = () => {
    login(3);
    onClose();
  };

  // ----- Interface method for Wallet Connect -----
  const handleConnect = (e: any, type: string) => {
    e.preventDefault();
    switch (type) {
      case "metamask":
        connectMetamask();
        break;

      case "walletconnect":
        connectWalletConnector();
        break;

      case "coinbase":
        connectCoinbase();
        break;

      default:
        throw new Error("Unknown wallet type");
    }
  };

  // -----------
  return (
    <div
      className={`wallet-box-backdrop ${isOpen && "active"}`}
      onClick={onClose}
    >
      <div
        className={`wallet-box ${isOpen && "active"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img className="wallet-bg" src="/paper-bg.png" alt="paper-bg" />
        <div className="wallet-box-inner">
          <h1 className="wallet-box-title">CONNECT WALLET</h1>
          <div className="line"></div>
          <a
            className="wallet-link"
            href="/"
            onClick={(e) => handleConnect(e, "metamask")}
          >
            <figure className="wallet-pic-wrapper">
              <img className="wallet-pic" src="/metamask.svg" alt="metamask" />
            </figure>
            <div className="wallet-link-content">
              <h1 className="wallet-link-title">METAMASK</h1>
              <p className="paragraph">Connect using browser wallet</p>
            </div>
          </a>
          <div className="line"></div>
          <a
            className="wallet-link"
            href="/"
            onClick={(e) => handleConnect(e, "coinbase")}
          >
            <figure className="wallet-pic-wrapper">
              <img className="wallet-pic" src="/coinbase.svg" alt="metamask" />
            </figure>
            <div className="wallet-link-content">
              <h1 className="wallet-link-title">COINBASE</h1>
              <p className="paragraph">Connect using coinbase</p>
            </div>
          </a>
          <div className="line"></div>
          <a
            className="wallet-link"
            href="/"
            onClick={(e) => handleConnect(e, "walletconnect")}
          >
            <figure className="wallet-pic-wrapper">
              <img
                className="wallet-pic"
                src="/wallet-connect.svg"
                alt="walletconnect"
              />
            </figure>
            <div className="wallet-link-content">
              <h1 className="wallet-link-title">WALLET CONNECT</h1>
              <p className="paragraph">Connect using mobile wallet</p>
            </div>
          </a>
        </div>
        <button className="close-btn" onClick={onClose}>
          <XIcon className="x-icon" />
        </button>
      </div>
    </div>
  );
}
