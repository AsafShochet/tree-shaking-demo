const securityNames = [
  "Nexus",
  "Quantum",
  "Synth",
  "Cortex",
  "Nebula",
  "Aether",
  "Zenith",
  "Pulse",
  "Stratus",
  "Inferno",
];

const animals = [
  "Elephant",
  "Dolphin",
  "Kangaroo",
  "Giraffe",
  "Platypus",
  "Panda",
  "Penguin",
  "Koala",
  "Orangutan",
  "Arctic Fox",
];

const socialNetworkWords = ["Social", "Friendly", "Connected", "Hive"];

const securityWords = [
  "Fortress",
  "Shield",
  "Guardian",
  "Protective",
  "Cipherus",
  "PassLess",
  "Phishful",
];

export function getRandomSecurityWord() {
  const randomIndex = Math.floor(Math.random() * securityWords.length);
  return securityWords[randomIndex];
}

export function getSocialNetworkName() {
  const randomIndex = Math.floor(Math.random() * socialNetworkWords.length);
  return socialNetworkWords[randomIndex];
}

export function getRandomAnimal() {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

export function getRandomAIWord() {
  const randomIndex = Math.floor(Math.random() * securityNames.length);
  return securityNames[randomIndex];
}
