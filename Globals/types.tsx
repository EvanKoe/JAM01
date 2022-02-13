interface HeaderProps {
  setFullMessages: (e: Message[] | ((f: Message[]) => Message[])) => void,
  setStage: (e: number | ((f: number) => number)) => void,
  setSuccessGlobal: (e: number | ((f: number) => number)) => void,
  setMessages: (e: Message[] | ((f: Message[]) => Message[])) => void,
  stage: number,
  success: number,
  successGlobal: number
};

interface SenderProps {
  setStage: (e: number | ((f: number) => number)) => void,
  stage: number,
  messages: Message[],
  setMessages: (e: Message[] | ((f: Message[]) => Message[])) => void,
  answers: Message[] | undefined,
};

interface ConvProps {
  messages: Message[],
  stage: number
};

interface Message {
  stage: number,        // questions and answers have different stages (success stay with monke answers)
  isDisplayed: boolean, // true only for success and monke messages that don't depend on a specific user message
  answerId: number,     // -1 for success, 0 -> 2 for questions/answers
  sender: "you" | "monke" | "success",
  body: string
};

export {
  HeaderProps,
  Message,
  ConvProps,
  SenderProps
};