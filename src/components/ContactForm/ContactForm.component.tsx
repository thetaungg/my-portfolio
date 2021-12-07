import React, { ChangeEvent, FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "../TextField/TextField.component";
import * as styles from "./ContactForm.styles";
import TextArea from "../TextArea/TextArea.component";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recapToken, setRecapToken] = useState("");
  const [isOnApiCall, setIsOnApiCall] = useState(false);
  const [isErrored, setIsErrored] = useState<boolean>(false);
  const [errorText, setErrorText] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onChange = (
    type: "name" | "email" | "message",
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // creating clean slate
    !isErrored && setIsErrored(false);
    isSuccess && setIsSuccess(false);

    if (type === "name") {
      setName(e.target.value);
      return;
    } else if (type === "email") {
      setEmail(e.target.value);
      return;
    } else if (type === "message") {
      setMessage(e.target.value);
      return;
    }
  };

  const onRecaptchaChange = (value: any) => {
    setRecapToken(value);
    if (value && errorText === "Please, confirm that you're not a robot.") {
      setIsErrored(false);
      setErrorText("");
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!recapToken) {
      setIsErrored(true);
      setErrorText("Please, confirm that you're not a robot.");
      return;
    }

    const data = {
      name,
      email,
      message,
      title: "Contacting From My Portfolio",
      receiver: "thetaung.dev@gmail.com",
    };

    setIsOnApiCall(true);
    // production env are included in build files so we don't have to create env keys in deployment environments
    fetch(process.env.GATSBY_FORM_SUBMIT_ENDPOINT as string, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setIsErrored(false);
        setErrorText("");
        setIsSuccess(true);
        setIsOnApiCall(false);
      })
      .catch(() => {
        setIsErrored(true);
        setErrorText("Something's wrong. Please try again.");
        setIsOnApiCall(false);
      });
  };
  return (
    <form css={styles.form} onSubmit={onSubmit}>
      <TextField
        css={styles.input}
        id={"name"}
        label={"Full name*"}
        value={name}
        type="text"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("name", e)}
      />
      <TextField
        css={styles.input}
        id={"email"}
        label={"Email address*"}
        value={email}
        type="email"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange("email", e)}
      />
      <TextArea
        css={styles.textarea}
        id="message"
        label="Message*"
        value={message}
        required
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange("message", e)}
      />
      <ReCAPTCHA
        sitekey={process.env.GATSBY_RECAPTCHA_SITEKEY as string}
        onChange={onRecaptchaChange}
        onExpired={() => onRecaptchaChange("")}
      />
      {isErrored && <span css={styles.error}>{errorText}</span>}
      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem" }}>
        <button css={styles.button} type="submit" disabled={isOnApiCall}>
          {isOnApiCall ? "Loading . . . " : "Send"}
        </button>
      </div>
      {isSuccess && (
        <div style={{ marginTop: "2rem" }}>
          <span css={styles.success}>
            &#127881; Thank you for contacting me. I'll get back to you as soon as I can. Have a
            nice day. &#128075;
          </span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
