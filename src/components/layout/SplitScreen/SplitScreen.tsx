import styles from "./SplitScreen.module.scss";

interface Props {
  left: React.ComponentType;
  right: React.ComponentType;
  leftWeight?: number;
  rightWeight?: number;
}

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1,
}: Props) => {
  return (
    <section className="flex">
      <div className={styles[`flex-grow-${leftWeight}`]}>
        <Left />
      </div>
      <div className={styles[`flex-grow-${rightWeight}`]}>
        <Right />
      </div>
    </section>
  );
};

export default SplitScreen;
