export interface IMethodIdentifiers {
  [methodName: string]: Readonly<string>;
}

export interface ICompilationTarget {
  [contract: string]: Readonly<string>;
}

export interface ISources {
  [contract: string]: {
    keccak256: Readonly<string>;
    license: Readonly<string>;
    urls: Readonly<string[]>;
  };
}

export interface IBytecode {
  bytecode: Readonly<string>;
  deployedBytecode: Readonly<string>;
}

export interface IEvm {
  bytecode: Readonly<{
    functionDebugData: Readonly<any>;
    generatedSources: Readonly<any>;
    linkReferences: Readonly<any>;
    object: Readonly<string>;
    opcodes: Readonly<string>;
    sourceMap: Readonly<string>;
  }>;
  deployedBytecode: Readonly<{
    functionDebugData: Readonly<any>;
    generatedSources: Readonly<any>;
    immutableReferences: Readonly<any>;
    linkReferences: Readonly<any>;
    object: Readonly<string>;
    opcodes: Readonly<string>;
    sourceMap: Readonly<string>;
  }>;
  methodIdentifiers: Readonly<IMethodIdentifiers>;
}

export interface IMetadata {
  compiler: Readonly<{
    version: string;
  }>;
  language: Readonly<"Solidity">;
  output: Readonly<{
    abi: Readonly<any[]>;
    devdoc: Readonly<any>;
    userdoc: Readonly<any>;
  }>;
  settings: Readonly<{
    compilationTarget: Readonly<ICompilationTarget>;
    evmVersion: Readonly<string>;
    libraries: Readonly<any>;
    metadata: Readonly<any>;
    optimizer: Readonly<{
      enabled: boolean;
      runs: number;
    }>;
    remappings: Readonly<any[]>;
  }>;
  sources: Readonly<ISources>;
  version: Readonly<number>;
}

export interface ICompile {
  bytecode: Readonly<IBytecode>;
  evm: Readonly<IEvm>;
  metadata: Readonly<IMetadata>;
}
