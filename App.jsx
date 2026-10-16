
import { useState } from 'react';
import styles from './App.module.css';
import ButtonsContainer from './Component/ButtonsContainer';
import Display from './Component/Display';

function App() {
  const [calval, setCalval] = useState("");
  const onButtonClick = (buttonText) => {

    if (buttonText === 'c') {
      setCalval("");

    }
    else if (buttonText === '=') {
      const result = eval(calval);
      setCalval(result);
    }
    else {
      const newDisplayvalue = calval + buttonText;
      setCalval(newDisplayvalue);
    }
  }
  return (
    <>
      <div className={styles.Calculator}>

        <Display Dispalayval={calval}></Display>

        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
};

export default App;
