import React from "react";
import ContactForm from "@/components/ContactForm/ContactForm.component";
import ContactMeImage from "@/assets/images/developer-3.inline.svg";
import * as styles from "./ContactMe.styles";

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
