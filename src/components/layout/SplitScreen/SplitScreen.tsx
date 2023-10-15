interface Props {
  left: React.ComponentType;
  right: React.ComponentType;
  leftWeight?: string;
  rightWeight?: string;
  responsive?: boolean;
}

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight,
  rightWeight,
  responsive = false,
}: Props) => {
  return (
    <section
      className={`"${responsive ? "block xl:flex justify-between" : "flex"}`}
    >
      <div style={{ flex: `0 0 ${leftWeight}` }} data-testid="left">
        <Left />
      </div>
      <div style={{ flex: `0 0 ${rightWeight}` }} data-testid="right">
        <Right />
      </div>
    </section>
  );
};

export default SplitScreen;
