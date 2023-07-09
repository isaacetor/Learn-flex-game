export type inputData = {
  check?: string;
  path?: string;
  textAreaOne?: string;
  textAreaTwo?: string;
  ContainerTwo?: string;
  classCss?: string;
  secondCodeText?: string;
};

export interface gameData extends inputData {
  titleText: string;
  definitionText: string;
  exampleText: string;
  compareData?: string;
  routePath?: string;
}

export interface instructionData extends gameData {}
