import { useState, forwardRef, useImperativeHandle } from "react";

import classes from "./Preference.module.css";

const Preferences = forwardRef((_, ref) => {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  function changeNewProdPrefHandler() {
    setWantsNewProdInfo((prevPref) => !prevPref);
  }
  function changeUpdateProdPrefHandler() {
    setWantsProdUpdateInfo((prevPref) => !prevPref);
  }
  const reset = () => {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        reset,
        selectedPreferences: {
          newProductInfo: wantsNewProdInfo,
          productUpdateInfo: wantsProdUpdateInfo,
        },
      };
    },
    [wantsNewProdInfo, wantsProdUpdateInfo]
  );

  return (
    <div className={classes.preferences}>
      <label>
        <input
          type="checkbox"
          id="pref-new"
          checked={wantsNewProdInfo}
          onChange={changeNewProdPrefHandler}
        />
        <span>New Products</span>
      </label>
      <label>
        <input
          type="checkbox"
          id="pref-updates"
          checked={wantsProdUpdateInfo}
          onChange={changeUpdateProdPrefHandler}
        />
        <span>Product Updates</span>
      </label>
    </div>
  );
});

export default Preferences;
