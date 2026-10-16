import styles from "../ButtonContainer.module.css";

const buttons = [
  "c", "1", "2", "+",
  "3", "4", "-",
  "5", "6", "*",
  "7", "8", "/",
  "=", "9", "0", "."
];

const ButtonsContainer = ({ onButtonClick }) => {
  return (
    <div className={styles.button_container}>
      {buttons.map((buttonText) => (
        <button
          key={buttonText}
          className={styles.button}
          onClick={() => onButtonClick(buttonText)}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
