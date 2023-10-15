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
      {category}
    </div>
  );
};

export default FilterItem;
