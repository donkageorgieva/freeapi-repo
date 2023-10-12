import styles from "./SplitScreen.module.scss";

interface Props {
  left: React.ComponentType;
  right: React.ComponentType;
  leftWeight?: number;
  rightWeight?: number;
  responsive?: boolean;
}

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1,
  responsive = false,
}: Props) => {
  return (
    <section className={`"${responsive ? "block md:flex" : "flex"}`}>
      <div className={styles[`flex-grow-${leftWeight}`]} data-testid="left">
        <Left />
      </div>
      <div className={styles[`flex-grow-${rightWeight}`]} data-testid="right">
        <Right />
      </div>
    </section>
  );
};

export default SplitScreen;
