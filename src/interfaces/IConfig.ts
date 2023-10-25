export interface IConfig {
  optimizer: {
    enabled: boolean;
    runs: number;
  };
  outputSelection: {
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
  };
}
