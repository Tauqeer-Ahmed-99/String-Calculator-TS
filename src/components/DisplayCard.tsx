const DisplayCard = ({
  type,
  data,
}: {
  type: "Error" | "Result";
  data: React.ReactNode;
}) => {
  return (
    <div
      data-testid={type}
      className="mt-6 p-4 bg-black/30 rounded-lg border border-cyan-500 border-opacity-30"
    >
      <h2 className="text-2xl font-semibold text-cyan-100 mb-2">{type}:</h2>
      <p className="text-xl text-white">{data}</p>
    </div>
  );
};

export default DisplayCard;
