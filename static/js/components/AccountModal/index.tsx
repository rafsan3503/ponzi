import toast from "react-hot-toast";
// -------------------------------------------------------------------------------------------------------------

import { truncateWalletString } from "utils";
// -------------------------------------------------------------------------------------------------------------

export default function AccountModal({
  isOpen,
  onClose,
  onDisconnect,
  accountAddress,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDisconnect: () => void;
  accountAddress: string;
}) {
  // ---- Copy to clipboard ----
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(accountAddress);
    toast.success("Copied to clipboard");
  };

  // ---- Redirect to Opensea ----
  const handleRedirection = () => {
    window.open(`https://opensea.io/${accountAddress}`, "_blank");
  };

  // ------
  return (
    <div className={`account__modal ${isOpen && "active"}`} onClick={onClose}>
      <div
        className="account__modal__inner"
        onClick={(e) => e.stopPropagation()}
      >
        <img src="/paper-bg.png" alt="paper-bg" className="img-bg" />
        <div className="account__modal__content">
          <h1 className="modal-title">ACCOUNT</h1>
          <div className="line"></div>
          <div className="account-info">
            <figure className="profile-pic-wrapper">
              {/***** Profile Icon *****/}
              <svg
                width="150"
                height="150"
                viewBox="0 0 154 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M77 0.333313C35.439 0.333313 0.333374 35.439 0.333374 77C0.333374 118.561 35.439 153.667 77 153.667C118.561 153.667 153.667 118.561 153.667 77C153.667 35.439 118.561 0.333313 77 0.333313ZM77 38.6666C90.2404 38.6666 100 48.4186 100 61.6666C100 74.9146 90.2404 84.6666 77 84.6666C63.7674 84.6666 54 74.9146 54 61.6666C54 48.4186 63.7674 38.6666 77 38.6666ZM37.854 113.585C44.731 103.465 56.2004 96.7186 69.3334 96.7186H84.6667C97.8074 96.7186 109.269 103.465 116.146 113.585C106.348 124.073 92.4484 130.667 77 130.667C61.5517 130.667 47.652 124.073 37.854 113.585Z"
                  fill="#2E2929"
                />
              </svg>
            </figure>

            {/***** Account Information *****/}
            <div className="account-info-content">
              <p className="paragraph">
                {truncateWalletString(accountAddress)}
              </p>
              <button className="copy-btn" onClick={handleCopyToClipboard}>
                COPY
              </button>
            </div>
          </div>

          {/***** Seperator *****/}
          <div className="line"></div>

          <button className="modal-btn opensea-btn" onClick={handleRedirection}>
            VIEW ON OPENSEA
          </button>
          <button className="dis-btn" onClick={onDisconnect}>
            DISCONNECT
          </button>
        </div>
      </div>
    </div>
  );
}
