const securityWords = [
  "Fortress",
  "Shield",
  "Guardian",
  "Sentinel",
  "Vault",
  "Cipher",
  "Aegis",
  "Bulwark",
  "Encrypt",
  "Secure",
];

export function getRandomSecurityWord() {
  const randomIndex = Math.floor(Math.random() * securityWords.length);
  return securityWords[randomIndex];
}
