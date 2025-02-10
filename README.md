# String Calculator

## Overview

The **String Calculator** is a simple utility that takes a string of numbers separated by delimiters and returns their sum. This project is implemented in **TypeScript** and tested using **Vitest & React Testing Library**.

## Features

- Supports default delimiters: `,` (comma) and `\n` (newline)
- Allows custom delimiters using the format `//[delimiter]\n`
- **Extended Version Completed** 🚀
  - Supports multiple custom delimiters: `//[delim1][delim2]\n`
  - Ignores numbers greater than `1000`
  - Handles edge cases like empty strings and negative numbers

## Installation

```sh
# Clone the repository
git clone https://github.com/your-username/string-calculator.git
cd string-calculator

# Install dependencies
yarn install  # or npm install
```

## Usage

Run the application:

```sh
yarn dev  # or npm run dev
```

## Testing

Run the test suite to ensure everything is working as expected:

```sh
yarn test  # or npm test
```

## Code Structure

```
📂 src
 ├── 📂 components
 │    ├── StringCalculator.tsx  # UI component
 │    ├── DisplayCard.tsx  # UI component
 ├── 📂 utils
 │    ├── helpers.ts  # Core logic for string splitting
 │    ├── math.ts  # core logic for math addition function
 📂 test
 ├── 📂 components
 │    ├── StringCalculator.test.tsx  # Tests logic for UI component
 ├── 📂 utils
 │    ├── helpers.test.ts  # Tests logic for string splitting
 │    ├── math.test.ts  # Tests logic for math addition function
 ├── 📄 App.tsx  # Main app entry point
```

## Example Inputs & Outputs

| Input                  | Output                       |
| ---------------------- | ---------------------------- |
| `"1,2,3"`              | `6`                          |
| `"1\n2,3"`             | `6`                          |
| `"//;\n1;2"`           | `3`                          |
| `"//[***]\n1***2***3"` | `6`                          |
| `"//[*][%]\n1*2%3"`    | `6`                          |
| `"1001,2"`             | `2` (ignores numbers > 1000) |

## Extended Version Achievements 🎯

✅ **Multiple Delimiters Supported**: `//[delim1][delim2]\n`
✅ **Handles Special Characters in Delimiters**
✅ **Ignores Large Numbers (`>1000`)**
✅ **Optimized Regular Expressions for Splitting**

## Contributing

Feel free to fork this repo and submit pull requests. Contributions are welcome!

## License

This project is licensed under the **MIT License**.

---

🔥 **Completed all extra challenges!** 🚀
