import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import TextField from "../TextField/TextField.component";
import * as styles from "./ContactForm.styles";
import TextArea from "../TextArea/TextArea.component";
import { success } from "./ContactForm.styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isErrored, setIsErrored] = useState<boolean>(false);
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = { name, email, message };

    fetch("https://hooks.zapier.com/hooks/catch/9345672/o0vfexw", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setIsSuccess(true);
      })
      .catch(() => setIsErrored(true));
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
        id="message"
        label="Message*"
        value={message}
        required
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange("message", e)}
      />
      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2.5rem" }}>
        <button css={styles.button} type="submit">
          Send
        </button>
      </div>
      {isErrored && (
        <div style={{ marginTop: "2rem" }}>
          <span css={styles.error}>
            Oops, looks like your message wasn't able to get through. Let's do it like the old ways!
            <br /> Please contact my email:{" "}
            <a href="mailto:thetaungg42@gmail.com">thetaungg42@gmail.com</a>
          </span>
        </div>
      )}
      {isSuccess && (
        <div style={{ marginTop: "2rem" }}>
          <span css={styles.success}>
            &#127881; Thanks for contacting me. I'll get back to you as soon as I can. Have a nice
            day. &#128075;
          </span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
