interface Props {
  data: Array<any>;
  keyPropertyName?: Array<string>;
  itemComponent: React.FunctionComponent;
  classNames?: string;
  handleClick?: (item: any) => void;
}

const List = ({
  data,
  keyPropertyName,
  itemComponent: ItemComponent,
  classNames = "",
  handleClick,
}: Props) => {
  return (
    <ul className={classNames} data-testid="list">
      {data.map((item: any, index) => (
        <li
          key={
            keyPropertyName
              ? keyPropertyName.map((name: string) => item[name]).join("")
              : index
          }
          onClick={handleClick && handleClick.bind(null, item)}
        >
          <ItemComponent {...item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
