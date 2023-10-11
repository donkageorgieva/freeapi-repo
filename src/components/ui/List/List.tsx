interface Props {
  data: Array<any>;
  keyPropertyName: Array<string>;
  itemComponent: React.ComponentType;
  classNames?: string;
}

const List = ({
  data,
  keyPropertyName,
  itemComponent: ItemComponent,
  classNames = "",
}: Props) => {
  return (
    <ul className={classNames}>
      {data.map((item: any) => (
        <li key={keyPropertyName.map((name: string) => item[name]).join("")}>
          <ItemComponent {...item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
