import { useState } from "react";

interface Props {
  data: Array<any>;
  keyPropertyName?: Array<string>;
  itemComponent: React.FunctionComponent;
  classNames?: string;
  listClassnames?: string;
  handleClick?: (item: any) => void;
}

const List = ({
  data,
  keyPropertyName,
  itemComponent: ItemComponent,
  classNames = "",
  handleClick,
  listClassnames = "",
}: Props) => {
  const [active, setActive] = useState(null);
  const onClickItem = (item: any) => {
    setActive(item);
    if (handleClick) {
      handleClick(item);
    }
  };
  return (
    <ul className={classNames} data-testid="list">
      {data.map((item: any, index) => (
        <li
          className={listClassnames}
          key={
            keyPropertyName
              ? keyPropertyName.map((name: string) => item[name]).join("")
              : index
          }
          onClick={onClickItem.bind(null, item)}
        >
          <ItemComponent {...item} active={handleClick && active} />
        </li>
      ))}
    </ul>
  );
};

export default List;
