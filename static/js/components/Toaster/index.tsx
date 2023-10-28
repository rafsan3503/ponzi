import { Toaster as RToaster } from "react-hot-toast";
// -------------------------------------------------------------------------------------------------------------

export default function Toaster() {
  return (
    <RToaster
      position="top-center"
      toastOptions={{
        success: {
          duration: 3000,
          style: {
            fontSize: "22px",
            backgroundColor: "#cdc6be",
            color: "#2e2929",
            outline: "none",
            border: "1px solid #2e2929 !important",
            fontFamily: "'PT Serif', serif",
          },
        },
        error: {
          duration: 3000,
          style: {
            fontSize: "22px",
            backgroundColor: "#cdc6be",
            color: "#2e2929",
            outline: "none",
            border: "1px solid #2e2929",
            fontFamily: "'PT Serif', serif",
          },
        },
      }}
    />
  );
}
