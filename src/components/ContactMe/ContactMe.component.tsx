import React from "react";
import ContactMeImage from "../../assets/icons/developer-3.svg";
import ContactForm from "../ContactForm/ContactForm.component";
import * as styles from "./ContactMe.styles";

const ContactMe = () => (
  <div css={styles.container} id="contact">
    <div css={styles.imgContainer}>
      <img src={ContactMeImage} alt="People talking" />
    </div>
    <div css={styles.contentsContainer}>
      <h5 css={styles.heading}>Let's get in touch</h5>
      <ContactForm />
    </div>
  </div>
);

export default ContactMe;
