import { useEffect, useState } from "react";
import { add } from "../utils/math";
import DisplayCard from "./DisplayCard";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [gradientColors, setGradientColors] = useState(["#001f3f", "#00458b"]);

  useEffect(() => {
    // load new graient colors on each load
    setGradientColors([
      `hsl(${200 + Math.random() * 40}, 100%, ${10 + Math.random() * 15}%)`,
      `hsl(${180 + Math.random() * 40}, 100%, ${20 + Math.random() * 15}%)`,
    ]);
  }, []);

  const handleCalculate = () => {
    try {
      setResult(null);

      const result = add(input);

      setResult(result);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background: `linear-gradient(to bottom right, ${gradientColors[0]}, ${gradientColors[1]})`,
        transition: "background 3s ease",
      }}
    >
      <h1
        data-testid="main-heading"
        className="text-4xl font-bold mb-8 text-cyan-100"
      >
        String Calculator
      </h1>
      <div className="w-full max-w-md">
        <textarea
          data-testid="main-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-40 px-4 py-2 rounded-lg mb-4 text-lg bg-black/30 text-white placeholder-cyan-200 placeholder-opacity-70 border border-cyan-500 border-opacity-30 focus:outline-none focus:border-opacity-100"
          placeholder="Enter your string..."
        />
        <button
          data-testid="calculate-btn"
          onClick={handleCalculate}
          className="cursor-pointer w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          disabled={false}
        >
          Calculate
        </button>
        {result !== null && <DisplayCard type="Result" data={result} />}
        {error !== null && result === null && (
          <DisplayCard type="Error" data={error} />
        )}
      </div>
    </div>
  );
};

export default StringCalculator;
