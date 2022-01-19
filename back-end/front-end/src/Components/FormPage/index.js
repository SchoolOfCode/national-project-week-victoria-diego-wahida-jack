import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import CancelIcon from "@mui/icons-material/Cancel";

const modalElement = document.getElementById("modal-root");

export function FormPage({ defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const close = useCallback(() => setIsOpen(false), []);

  const formTemplate = {
    person: "",
    roomNumber: "",
    problemTitle: "",
    steps: "",
    checkbox: false,
  };

  const [formData, setFormData] = useState(formTemplate);
  const [validForm, setValidForm] = useState(true);

  function handleChange(item, value) {
    setFormData({ ...formData, [item]: value });

    if (
      formData.person === "" ||
      formData.roomNumber === "" ||
      formData.problemTitle === "" ||
      formData.steps === "" ||
      formData.checkbox === false
    ) {
      console.log(formData.checkbox);
      return;
    } else {
      setValidForm(false);
    }
  }

  function clearForm() {
    setFormData(formTemplate);
    setValidForm(true);
  }
  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );
  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <section className="modal">
        <div className="modal-overlay" onClick={close}></div>
        <CancelIcon className="modal-close" onClick={close}></CancelIcon>
        <h1>Form Page</h1>
        <label>
          Have you googled it?
          <input
            type="checkbox"
            checked={formData.checkbox}
            value={formData.checkbox}
            onChange={(e) => handleChange("checkbox", e.target.checked)}
          ></input>
        </label>
        <br></br>
        <input
          placeholder="enter your name"
          onChange={(e) => handleChange("person", e.target.value)}
          value={formData.person}
        ></input>
        <br></br>
        <input
          placeholder="room #"
          onChange={(e) => handleChange("roomNumber", e.target.value)}
          value={formData.roomNumber}
        ></input>
        <br></br>
        <input
          placeholder="problem title"
          onChange={(e) => handleChange("problemTitle", e.target.value)}
          value={formData.problemTitle}
        ></input>
        <br></br>
        <input
          placeholder="steps taken to solve problem"
          onChange={(e) => handleChange("steps", e.target.value)}
          value={formData.steps}
        ></input>
        <br></br>
        <button
          onClick={(e) => {
            clearForm(e);
            setIsOpen(false);
          }}
          disabled={validForm}
        >
          Submit
        </button>
      </section>
    ) : null,
    modalElement
  );
}
export default forwardRef(FormPage);
// export default FormPage;
