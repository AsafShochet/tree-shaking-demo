const startupNames = [
  "Monkey",
  "Vault",
  "Zebra",
  "Blocker",
  "Optimizer",
  "Moose",
  "Penguin",
  "Armadillo",
];

export function getRandomStartupName() {
  const randomIndex = Math.floor(Math.random() * startupNames.length);
  return startupNames[randomIndex];
}

// Example usage:
console.log(getRandomStartupName());
