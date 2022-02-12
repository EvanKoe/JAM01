import { Message } from "./types";

const messages: Message[] = [
  {
    stage: 0,
    answerId: -1,
    isDisplayed: true,
    sender: "monke",
    body: "Hi, human !"
  },
  {
    stage: 1,
    answerId: 0,
    isDisplayed: false,
    sender: "you",
    body: "Hi monke !"
  },
  {
    stage: 1,
    answerId: 1,
    isDisplayed: false,
    sender: "you",
    body: "Are you a real monke ?"
  },
  {
    stage: 1,
    answerId: 2,
    isDisplayed: false,
    sender: "you",
    body: "Archi, is that you ?!"
  },
  {
    stage: 2,
    answerId: -1,
    isDisplayed: true,
    sender: "success",
    body: "First sms sent to the monke !"
  },
  {
    stage: 2,
    answerId: 1,
    isDisplayed: false,
    sender: "monke",
    body: "Yes I am !"
  },
  {
    stage: 2,
    answerId: 2,
    isDisplayed: false,
    sender: "monke",
    body: "No fucking faggot, I am just a monke"
  },
  {
    stage: 2,
    answerId: 0,
    isDisplayed: false,
    sender: "monke",
    body: "How are you, human ?"
  },
  {
    stage: 2,
    answerId: 2,
    isDisplayed: false,
    sender: "success",
    body: "You confused Archi with a monkey. This will be reported."
  },
  {
    stage: 3,
    answerId: 0,
    isDisplayed: false,
    sender: "you",
    body: "coucou"
  },
  {
    stage: 3,
    answerId: 1,
    isDisplayed: false,
    sender: "you",
    body: "bwa bwaaaaaaaaaa"
  }
];

export default messages;