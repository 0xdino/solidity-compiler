export interface IMethodIdentifiers {
  [methodName: string]: string;
}

export interface ICompilationTarget {
  [contract: string]: string;
}

export interface ISources {
  [contract: string]: {
    keccak256: string;
    license: string;
    urls: string[];
  };
}

export interface IBytecode {
  bytecode: string;
  deployedBytecode: string;
}

export interface IEvm {
  bytecode: {
    functionDebugData: any;
    generatedSources: any;
    linkReferences: any;
    object: string;
    opcodes: string;
    sourceMap: string;
  };
  deployedBytecode: {
    functionDebugData: any;
    generatedSources: any;
    immutableReferences: any;
    linkReferences: any;
    object: string;
    opcodes: string;
    sourceMap: string;
  };
  methodIdentifiers: IMethodIdentifiers;
}

export interface IMetadata {
  compiler: {
    version: string;
  };
  language: "Solidity";
  output: {
    abi: any[];
    devdoc: any;
    userdoc: any;
  };
  settings: {
    compilationTarget: ICompilationTarget;
    evmVersion: string;
    libraries: any;
    metadata: any;
    optimizer: {
      enabled: boolean;
      runs: number;
    };
    remappings: any[];
  };
  sources: ISources;
  version: number;
}

export interface ICompile {
  bytecode: IBytecode;
  evm: IEvm;
  metadata: IMetadata;
}
