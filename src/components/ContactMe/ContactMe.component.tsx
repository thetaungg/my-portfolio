import React from "react";
import * as styles from "./ContactMe.styles";
import ContactMeImage from "../Images/ContactMeImage";
import ContactForm from "../ContactForm/ContactForm.component";

const ContactMe = () => (
  <div css={styles.container} id="contact">
    <div css={styles.imgContainer}>
      <ContactMeImage />
    </div>
    <div css={styles.contentsContainer}>
      <h5 css={styles.heading}>Let's get in touch</h5>
      <ContactForm />
    </div>
  </div>
);

export default ContactMe;
