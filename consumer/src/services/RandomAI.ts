const startupNames = [
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

export function getRandomAIWord() {
  const randomIndex = Math.floor(Math.random() * startupNames.length);
  return startupNames[randomIndex];
}
