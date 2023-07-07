export type gameData = {
  titleText: string;
  definitionText: string;
  exampleText: string;
  compareData?: string;
};

export interface instructionData extends gameData {}

export type compareData = {
  compare: string;
};
