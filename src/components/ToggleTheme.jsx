import React, { useContext } from "react";
import { MainContext } from "../App";

function ToggleTheme() {
  const { isDark, setIsDark } = useContext(MainContext);

  return (
    <label className="checkbox-input">
      <input
        className="input"
        checked={isDark}
        type="checkbox"
        onClick={() => setIsDark(!isDark)}
      />
      <div className="checkbox">
        <ion-icon name="sunny-outline"></ion-icon>
        <ion-icon name="moon-outline"></ion-icon>
      </div>
    </label>
  );
}

export default ToggleTheme;
