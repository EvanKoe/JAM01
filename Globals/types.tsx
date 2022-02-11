interface HeaderProps {
  setStage: (e: number) => void
};

interface Message {
  stage: number,
  sender: "you" | "monke" | "success",
  body: string
};

interface ConvProps {
  messages: Message[]
};

export {
  HeaderProps,
  Message,
  ConvProps
};