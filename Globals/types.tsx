interface HeaderProps {
  setStage: (e: number | ((f: number) => number)) => void,
  stage: number,
  setResponses: (e: number[] | ((f: number[]) => number[])) => void
  setMessage: (e: Message[] | ((f: Message[]) => Message[])) => void
};

interface SenderProps {
  setStage: (e: number | ((f: number) => number)) => void,
  stage: number,
  answers: Message[] | undefined,
  array: number[] | [],
  setArray: (e: number[] | ((f: number[]) => number[])) => void,
};

interface Message {
  stage: number,
  answerId: number, // -1 if not an answer
  sender: "you" | "monke" | "success",
  body: string
};

interface ConvProps {
  messages: Message[],
  responses: number[],
  stage: number,
  stateMsg: Message[] | undefined,
};

export {
  HeaderProps,
  Message,
  ConvProps,
  SenderProps
};