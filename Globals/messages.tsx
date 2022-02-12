import { Message } from "./types";

const messages: Message[] = [
  {
    stage: 0,
    answerId: -1,
    sender: "monke",
    body: "Hi, human"
  },
  {
    stage: 1,
    answerId: 0,
    sender: "you",
    body: "Hi monke !"
  },
  {
    stage: 1,
    answerId: 1,
    sender: "you",
    body: "Are you a real monke ?"
  },
  {
    stage: 1,
    answerId: 2,
    sender: "you",
    body: "Archi, is that you ?!"
  },
  {
    stage: 1,
    answerId: -1,
    sender: "success",
    body: "First sms sent to the monke !"
  },
  {
    stage: 1,
    answerId: 1,
    sender: "monke",
    body: "Yes I am !"
  },
  {
    stage: 1,
    answerId: 2,
    sender: "monke",
    body: "No fucking faggot, I am just a monke"
  },
  {
    stage: 1,
    answerId: 0,
    sender: "monke",
    body: "How are you, human ?"
  },
  {
    stage: 1,
    answerId: 2,
    sender: "success",
    body: "You confused Archi with a monkey."
  },
  {
    stage: 2,
    answerId: 0,
    sender: "you",
    body: "coucou"
  },
  {
    stage: 2,
    answerId: 1,
    sender: "you",
    body: "bite"
  }
];

export default messages;