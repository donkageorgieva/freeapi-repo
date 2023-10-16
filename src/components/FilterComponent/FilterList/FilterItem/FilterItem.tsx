interface Props {
  category: string;
  active: any;
}

const FilterItem = ({ category, active }: Props) => {
  return (
    <div
      className={`${
        active && active.category === category && "text-indigo-500"
      }`}
    >
      <h4>{category}</h4>
    </div>
  );
};

export default FilterItem;
