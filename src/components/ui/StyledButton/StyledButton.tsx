import styles from "./StyledButton.module.scss";

const StyledButton = ({
  children,
  secondary,
}: {
  children: React.ReactNode;
  secondary?: boolean;
}) => {
  return (
    <div
      className={[
        !secondary
          ? styles["styled-button-primary"]
          : styles["styled-button-secondary"],
        styles.button,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default StyledButton;
