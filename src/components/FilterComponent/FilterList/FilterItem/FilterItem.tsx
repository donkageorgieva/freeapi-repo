interface Props {
  category: string;
}

const FilterItem = ({ category }: Props) => {
  return <div>{category}</div>;
};

export default FilterItem;
