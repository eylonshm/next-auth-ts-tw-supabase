import { ShowList } from "../../organisms";

const loadList = async () => {
  return new Promise<string[]>((resolve) =>
    setTimeout(() => {
      resolve(["dsada", "dsadsad"]);
    }, 3000)
  );
};

export const ItemsList = () => {
  return <ShowList loadList={loadList} />;
};
