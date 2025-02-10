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
      className={
        type === "Error"
          ? "mt-6 p-4 bg-red-900/30 rounded-lg border border-red-500 text-red-500 border-opacity-30"
          : "mt-6 p-4 bg-black/30 rounded-lg border border-cyan-500 text-cyan-100 border-opacity-30"
      }
    >
      <h2 className="text-2xl font-semibold mb-2">{type}:</h2>
      <p className="text-xl">{data}</p>
    </div>
  );
};

export default DisplayCard;
