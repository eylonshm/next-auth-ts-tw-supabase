interface ShowListProps {
  loadList: () => Promise<string[]>;
}

export const ShowList = async ({ loadList }: ShowListProps) => {
  const items = await loadList();
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      {items.map((item, index) => (
        <div key={index} className="px-4 py-4 sm:px-6">
          {item}
        </div>
      ))}
    </div>
  );
};
