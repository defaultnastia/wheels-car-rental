import { CSSProperties } from "react";
import { PulseLoader, SyncLoader } from "react-spinners";
import css from "./CustomLoader.module.css";

const CustomLoader = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className={css.backdrop}>
      <SyncLoader
        color="var(--gray-color)"
        cssOverride={override}
        size={"24px"}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default CustomLoader;
