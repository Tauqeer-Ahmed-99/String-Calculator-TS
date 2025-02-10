import { useEffect, useState } from "react";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [gradientColors, setGradientColors] = useState(["#001f3f", "#00458b"]);

  useEffect(() => {
    // load new graient colors on each load
    setGradientColors([
      `hsl(${200 + Math.random() * 40}, 100%, ${10 + Math.random() * 15}%)`,
      `hsl(${180 + Math.random() * 40}, 100%, ${20 + Math.random() * 15}%)`,
    ]);
  }, []);

  const handleCalculate = () => {
    // Placeholder for calculation logic
    setResult(0); // Replace with actual calculation
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
        <input
          data-testid="main-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 rounded-lg mb-4 text-lg bg-black/30 text-white placeholder-cyan-200 placeholder-opacity-70 border border-cyan-500 border-opacity-30 focus:outline-none focus:border-opacity-100"
          placeholder="Enter your string..."
        />
        <button
          data-testid="calculate-btn"
          onClick={handleCalculate}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          disabled={false}
        >
          Calculate
        </button>
        {result !== null && (
          <div
            data-testid="results"
            className="mt-6 p-4 bg-black/30 rounded-lg border border-cyan-500 border-opacity-30"
          >
            <h2 className="text-2xl font-semibold text-cyan-100 mb-2">
              Result:
            </h2>
            <p className="text-xl text-white">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StringCalculator;
