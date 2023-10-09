interface Props {
  data: Array<any>;
  keyPropertyName: Array<string>;
  itemComponent: React.ComponentType;
}

const List = ({
  data,
  keyPropertyName,
  itemComponent: ItemComponent,
}: Props) => {
  return (
    <ul>
      {data.map((item: any) => (
        <li key={keyPropertyName.map((name: string) => item[name]).join("")}>
          <ItemComponent {...item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
