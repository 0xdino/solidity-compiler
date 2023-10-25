import fs from "fs";
import path from "path";
import { IConfig } from "@/src/interfaces/IConfig";
import { Compiler } from "@/src";

const start = async () => {
  console.log("> Start test...");

  const code: string = fs
    .readFileSync(path.resolve(__dirname, "contracts", "WETH9.sol"))
    .toString();

  const config: IConfig = {
    optimizer: {
      enabled: true,
      runs: 200,
    },
    outputSelection: {
      "*": {
        "*": [
          "abi",
          "evm.bytecode",
          "evm.deployedBytecode",
          "evm.methodIdentifiers",
          "metadata",
        ],
        "": ["ast"],
      },
    },
  };

  const compiler = new Compiler(config);

  // Recommended for the beauty of the code.
  const formatted = await compiler.format(code);

  const res = await compiler.compileSingleFile(formatted, "WETH9");

  const resultPath = path.resolve(__dirname, "results", "result.json");
  fs.mkdir(path.dirname(resultPath), { recursive: true }, () => {
    fs.writeFileSync(resultPath, JSON.stringify(res));
    console.log(`> Open ${resultPath} to view the result.`);
  });
};

start();
