export interface IOptimizer {
  enabled: Readonly<boolean>;
  runs: Readonly<number>;
}

export interface IConfig {
  optimizer: Readonly<IOptimizer>;
  outputSelection: Readonly<{
    "*":
      | {
          "*":
            | [
                "abi",
                "evm.bytecode",
                "evm.deployedBytecode",
                "evm.methodIdentifiers",
                "metadata",
              ]
            | string[];
          "": ["ast"] | string[];
        }
      | any;
  }>;
}
