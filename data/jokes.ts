export const jokes = [
  {
    id: 1,
    joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
  },
  {
    id: 2,
    joke: "How many programmers does it take to change a light bulb? None — it’s a hardware problem.",
  },
  {
    id: 3,
    joke: "Why do Java developers wear glasses? Because they don’t C#.",
  },
  {
    id: 4,
    joke: "I asked my Linux computer to make me a sandwich. It replied: 'sudo make me a sandwich.'",
  },
  {
    id: 5,
    joke: "There are 10 kinds of people in the world: those who understand binary and those who don’t.",
  },
  {
    id: 6,
    joke: "Why was the developer broke? Because he used up all his cache.",
  },
  { id: 7, joke: "What’s a programmer’s favorite hangout place? The Foo Bar." },
  {
    id: 8,
    joke: "Why do Python programmers prefer snakes? Because they’re all about indentation.",
  },
  {
    id: 9,
    joke: "What did the Linux user say to his Windows friend? 'Have you tried turning your life off and on again?'",
  },
  {
    id: 10,
    joke: "Why did the command line break up with the GUI? Too many windows in the relationship.",
  },
  {
    id: 11,
    joke: "Why was the JavaScript developer sad? Because he didn’t Node how to Express himself.",
  },
  {
    id: 12,
    joke: "I told my computer I needed a break… it said: 'I can’t — I’m still processing.'",
  },
  {
    id: 13,
    joke: "Why are Linux users great at relationships? They avoid unnecessary attachments.",
  },
  { id: 14, joke: "What do you call a programmer from Finland? Nerdic." },
  {
    id: 15,
    joke: "Why did the coder quit his job? Because he didn’t get arrays.",
  },
  {
    id: 16,
    joke: "I tried to write a joke about UDP… but you might not get it.",
  },
  {
    id: 17,
    joke: "What’s the object-oriented way to become wealthy? Inheritance.",
  },
  {
    id: 18,
    joke: "Why couldn’t the programmer get out of the shower? The instructions said: 'Lather, Rinse, Repeat.'",
  },
  { id: 19, joke: "What’s a Linux user’s favorite game? sudo-ku." },
  {
    id: 20,
    joke: "Why don’t Linux users get lost? They always follow the root.",
  },
];

export const getNextId = () => {
  return jokes[jokes.length - 1].id + 1;
};
