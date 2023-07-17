import { FormEvent, useRef } from "react";
import Preferences from "./Preference";
import classes from "./Form.module.css";

interface Props {
  reset: () => void;
  selectedPreferences: {
    newProductInfo: boolean;
    productUpdateInfo: boolean;
  };
}

const Form = () => {
  const preferencesRef = useRef<Props>();
  function submitHandler(event: FormEvent) {
    event.preventDefault();
    console.log(preferencesRef.current?.selectedPreferences);
    preferencesRef.current?.reset();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>

      <Preferences ref={preferencesRef} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
