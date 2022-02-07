import React, { useState } from "react";
import Typist from "react-typist";
import DeveloperIcon from "../../assets/icons/developer.svg";
import * as styles from "./Header.styles";

const texts = ["Frontend Engineer.", "MERNStack Developer.", "JAMStack Engineer."];

const Header = () => {
  const [index, setIndex] = useState(0);

  const onTypingDone = () => {
    if (index === texts.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div css={styles.header}>
      <div css={styles.textContainer}>
        <h1 css={styles.heading}>Hey there!</h1>
        <h1 css={styles.introduction}>I'm Thet Aung.</h1>
        <Typist
          avgTypingDelay={50}
          cursor={{ show: false }}
          key={index}
          onTypingDone={onTypingDone}>
          <h1 css={styles.subHeading}>&nbsp;{texts[index]}</h1>{" "}
          {/*don't want typist to remove entire line since the texts are align centered if we remove this one the other 2 from above will go down. So, during the animations the texts will go up and down and we don't want that*/}
          <Typist.Backspace count={texts[index].length} delay={3000} />
        </Typist>
      </div>
      <div css={styles.imgContainer}>
        <img src={DeveloperIcon} alt="Developer" />
      </div>
    </div>
  );
};

export default Header;
