import * as solc from "solc";
import * as prettier from "prettier";
import * as pluginSolidity from "prettier-plugin-solidity";
import { IConfig } from "@/src/interfaces/IConfig";
import {
  IBytecode,
  IEvm,
  IMetadata,
  ICompile,
} from "@/src/interfaces/ICompiler";

export class Compiler {
  private readonly _config: IConfig;

  constructor(config: IConfig) {
    this._config = config;
  }

  /**
   * @dev Compiles a single solidity file.
   * @param code - smart contract code as string.
   * @param name - target smart contract name.
   */
  public async compileSingleFile(
    code: string,
    name: string
  ): Promise<ICompile | undefined> {
    try {
      const target: string = `${name}.sol`;
      const input = {
        language: "Solidity",
        sources: {
          [target]: {
            content: code,
          },
        },
        settings: {
          ...this._config,
        },
      };
      const res = JSON.parse(solc.compile(JSON.stringify(input)));

      if (!res["contracts"])
        throw new Error(res.errors ? res.errors[0].formattedMessage : res);

      const evm: IEvm = res["contracts"][target][name].evm as IEvm;

      const metadata = JSON.parse(
        res["contracts"][target][name].metadata
      ) as IMetadata;

      const bytecode: IBytecode = {
        bytecode: evm.bytecode.object,
        deployedBytecode: evm.deployedBytecode.object,
      } as IBytecode;

      const compile: ICompile = { bytecode, evm, metadata } as ICompile;

      return compile;
    } catch (e) {
      console.error("Compile:Error::", e);
      return undefined;
    }
  }

  /**
   * @dev Format a single solidity file.
   * @param code - smart contract code as string.
   */
  public async format(code: string): Promise<string> {
    try {
      const formattedCode = await prettier.format(code, {
        parser: "solidity-parse",
        plugins: [pluginSolidity],
      });
      return formattedCode;
    } catch (e) {
      console.error(e);
      return code;
    }
  }
}
