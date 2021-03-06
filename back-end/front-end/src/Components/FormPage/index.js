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
const API_URL = process.env.REACT_APP_API_URL;

export function FormPage(
  { defaultOpened = false, setProblems, problems },
  ref
) {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const close = useCallback(() => setIsOpen(false), []);

  const formTemplate = {
    roomnumber: "",
    title: "",
    text: "",
    dateandtime: "",
    time: "",
    checkbox: false,
    beingsolved: false,
  };

  const [formData, setFormData] = useState(formTemplate);
  const [validForm, setValidForm] = useState(true);

  function handleChange(item, value) {
    setFormData({ ...formData, [item]: value });
  }
  useEffect(() => {
    if (
      formData.roomnumber === "" ||
      formData.title === "" ||
      formData.text === "" ||
      formData.checkbox === false
    ) {
      return;
    } else {
      setValidForm(false);
    }
    return () => {
      return;
    };
  }, [formData]);

  async function submitProblem() {
    let today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let currentTime = today.getHours() + ":" + minutes;
    today = today.toString();
    let roomno = parseInt(formData.roomnumber);
    console.log(typeof roomno);
    let entry = {
      ...formData,
      dateandtime: today,
      time: currentTime,
      roomnumber: roomno,
    };
    console.log(entry);
    setProblems([...problems, entry]);
    const res = await fetch(`${API_URL}/unsolvedproblems/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
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
        {/* <div className="modal-overlay" onClick={close}></div> */}
        <CancelIcon className="modal-close" onClick={close}></CancelIcon>
        <h1>Enter your problem:</h1>
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
        <label>
          Room number:
          <input
            placeholder="room #"
            onChange={(e) => handleChange("roomnumber", e.target.value)}
            value={formData.roomnumber}
          ></input>
        </label>
        <br></br>
        <label>
          Problem title:
          <input
            placeholder="problem title"
            onChange={(e) => handleChange("title", e.target.value)}
            value={formData.title}
          ></input>
        </label>
        <br></br>
        <label>
          Steps taken:
          <input
            placeholder="steps taken to solve problem"
            onChange={(e) => handleChange("text", e.target.value)}
            value={formData.text}
          ></input>
        </label>
        <br></br>
        <button
          onClick={(e) => {
            submitProblem();
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
