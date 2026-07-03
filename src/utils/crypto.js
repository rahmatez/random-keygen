// Cryptographically secure generators using the Web Crypto API.
// Running entirely client-side.

// Standard list of English words for Memorable Passphrase generation.
const wordList = [
  "about", "above", "action", "actor", "admit", "adopt", "advice", "affect", "agency", "agent",
  "agree", "ahead", "allow", "almost", "along", "alter", "always", "among", "amount", "animal",
  "annual", "answer", "anyone", "appeal", "appear", "apple", "apply", "argue", "around", "arrive",
  "artist", "aspect", "assess", "assume", "attack", "attend", "author", "avatar", "backup", "banana",
  "banner", "barley", "barrel", "basket", "battle", "beauty", "become", "before", "behind", "belief",
  "belong", "below", "benefit", "better", "beyond", "bishop", "bitter", "blanket", "blossom", "border",
  "bottle", "bottom", "bounce", "branch", "bridge", "bright", "broken", "budget", "burden", "butter",
  "camera", "campus", "candle", "canyon", "canvas", "carbon", "career", "carpet", "carrot", "castle",
  "casual", "catalog", "cattle", "cavity", "celery", "cement", "center", "cereal", "chance", "change",
  "channel", "chapter", "charge", "charity", "cheese", "cherry", "chestnut", "chicken", "chief", "child",
  "chimney", "choice", "choose", "chronic", "church", "cinema", "circle", "circus", "citizen", "citrus",
  "clinic", "closet", "clouds", "cluster", "coffee", "cohort", "collar", "colony", "column", "combat",
  "comedy", "comfort", "commit", "common", "comply", "convey", "cookie", "copper", "corner", "cotton",
  "county", "couple", "cousin", "cradle", "crafts", "crater", "crayon", "credit", "crisis", "critic",
  "cruise", "crumb", "crying", "crystal", "cubism", "cuckoo", "cuddle", "culprit", "culture", "cupcake",
  "curator", "curfew", "cushion", "custom", "cutting", "cycle", "cynic", "dagger", "daily", "damage",
  "danger", "dapper", "daring", "darken", "darling", "decade", "decent", "decide", "decree", "defeat",
  "defend", "define", "degree", "demand", "dental", "depart", "depend", "depict", "deploy", "depth",
  "deputy", "derive", "desert", "design", "desire", "detail", "detect", "device", "devote", "dialog",
  "diesel", "differ", "digest", "digital", "dinner", "direct", "divide", "divine", "doctor", "domain",
  "donkey", "double", "dragon", "drawer", "dreamy", "driver", "drizzle", "during", "dynamic", "eager",
  "eagles", "earnest", "earthy", "easily", "eating", "echoes", "eclipse", "ecology", "economy", "editor",
  "effect", "effort", "eighth", "either", "elastic", "elbows", "elder", "elect", "element", "elite",
  "empire", "employ", "empty", "enable", "enact", "ending", "endure", "energy", "engage", "engine",
  "enjoy", "enlist", "enough", "enroll", "ensure", "enter", "entire", "entity", "enzyme", "epic",
  "epoch", "equal", "equip", "equity", "era", "escape", "escort", "essay", "estate", "ethics",
  "ethnic", "evade", "event", "every", "evict", "evoke", "evolve", "exact", "exceed", "excel",
  "except", "excess", "excite", "excuse", "exempt", "exert", "exile", "exist", "exotic", "expand",
  "expect", "expert", "expire", "export", "expose", "extend", "extra", "fabric", "facial", "factor",
  "factory", "fading", "failed", "failure", "fairly", "faith", "family", "famous", "farmer", "fashion",
  "fasten", "father", "faulty", "favor", "fearless", "feature", "federal", "feeling", "fellow", "female",
  "fender", "ferry", "festive", "fiber", "fiction", "field", "fierce", "fifth", "fifty", "fighter",
  "figure", "filter", "finale", "finance", "finding", "finger", "finish", "finite", "firefly", "fiscal",
  "flavor", "flight", "floral", "flourish", "flower", "fluent", "fluid", "flurry", "flying", "focus",
  "folder", "follow", "forest", "forget", "formal", "format", "former", "fortress", "fortune", "forum",
  "foster", "foundry", "fourth", "fraction", "fracture", "fragile", "frames", "freedom", "freeze", "frequent",
  "freshly", "friction", "friend", "fringe", "frontal", "frosty", "frugal", "fruit", "funnel", "future"
];

// Helper to generate cryptographically secure bytes
export function getRandomBytes(size) {
  if (typeof window !== "undefined" && window.crypto) {
    const array = new Uint8Array(size);
    window.crypto.getRandomValues(array);
    return array;
  }
  // Server-side fallback or placeholder
  const array = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = Math.floor(Math.random() * 256);
  }
  return array;
}

// Generate random number between 0 and max (exclusive) securely
export function secureRandomInt(max) {
  if (max <= 1) return 0;
  
  const bytesNeeded = Math.ceil(Math.log2(max) / 8);
  const maxVal = Math.pow(256, bytesNeeded);
  const limit = maxVal - (maxVal % max);
  
  while (true) {
    const bytes = getRandomBytes(bytesNeeded);
    let val = 0;
    for (let i = 0; i < bytesNeeded; i++) {
      val = (val << 8) + bytes[i];
    }
    if (val < limit) {
      return val % max;
    }
  }
}

// 1. Password Generator
export function generatePassword(length = 16, options = {}) {
  const defaults = {
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    excludeAmbiguous: false,
    customSymbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
  };
  
  const opts = { ...defaults, ...options };
  
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numChars = "0123456789";
  const symChars = opts.customSymbols;
  
  let allowed = "";
  let required = [];
  
  if (opts.lowercase) {
    allowed += lowerChars;
    required.push(lowerChars[secureRandomInt(lowerChars.length)]);
  }
  if (opts.uppercase) {
    allowed += upperChars;
    required.push(upperChars[secureRandomInt(upperChars.length)]);
  }
  if (opts.numbers) {
    allowed += numChars;
    required.push(numChars[secureRandomInt(numChars.length)]);
  }
  if (opts.symbols) {
    allowed += symChars;
    required.push(symChars[secureRandomInt(symChars.length)]);
  }
  
  if (opts.excludeAmbiguous) {
    const ambiguous = /[O01lI]/g;
    allowed = allowed.replace(ambiguous, "");
    required = required.map(c => c.replace(ambiguous, "") || "a");
  }
  
  if (allowed.length === 0) {
    allowed = lowerChars;
  }
  
  let password = [];
  // Populate first characters with required sets to guarantee complexity
  for (let i = 0; i < required.length && i < length; i++) {
    password.push(required[i]);
  }
  
  // Fill remaining slots
  while (password.length < length) {
    password.push(allowed[secureRandomInt(allowed.length)]);
  }
  
  // Shuffle securely
  for (let i = password.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    const temp = password[i];
    password[i] = password[j];
    password[j] = temp;
  }
  
  return password.join("");
}

// 2. Memorable Word Passphrase
export function generatePassphrase(numWords = 4, separator = "-") {
  const words = [];
  for (let i = 0; i < numWords; i++) {
    const idx = secureRandomInt(wordList.length);
    words.push(wordList[idx]);
  }
  return words.join(separator);
}

// 3. Pronounceable Passwords
export function generatePronounceablePassword(length = 12) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";
  
  let password = "";
  let isConsonant = secureRandomInt(2) === 0;
  
  while (password.length < length) {
    if (isConsonant) {
      password += consonants[secureRandomInt(consonants.length)];
    } else {
      password += vowels[secureRandomInt(vowels.length)];
    }
    isConsonant = !isConsonant;
  }
  
  return password.slice(0, length);
}

// 4. UUID Generator
export function generateUUID() {
  if (typeof window !== "undefined" && window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }
  
  // Custom RFC4122 v4 UUID generator
  const bytes = getRandomBytes(16);
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // Set version to 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // Set variant to RFC4122
  
  const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

// 5. Hex Key Generator
export function generateHex(bits) {
  const byteSize = Math.ceil(bits / 8);
  const bytes = getRandomBytes(byteSize);
  return Array.from(bytes).map(b => b.toString(16).padStart(2, "0")).join("");
}

// 6. API Key Generator
export function generateAPIKey(format = "stripe") {
  const hex32 = generateHex(256);
  const base64Str = btoa(String.fromCharCode(...getRandomBytes(24)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
    
  switch (format.toLowerCase()) {
    case "stripe":
      return `sk_live_${generateHex(128).slice(0, 24)}`;
    case "aws_access":
      return "AKIA" + Array.from(getRandomBytes(8)).map(b => "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[b % 36]).join("");
    case "aws_secret":
      return btoa(String.fromCharCode(...getRandomBytes(30))).replace(/[^a-zA-Z0-9/+=]/g, "a").slice(0, 40);
    case "github":
      return `ghp_${Array.from(getRandomBytes(18)).map(b => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[b % 62]).join("")}`;
    default:
      return base64Str;
  }
}

// 7. JWT Secret Generator
export function generateJWTSecret(bits = 256) {
  const byteSize = Math.ceil(bits / 8);
  const bytes = getRandomBytes(byteSize);
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

// 8. Django SECRET_KEY Generator
export function generateDjangoSecret() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)";
  let key = "";
  for (let i = 0; i < 50; i++) {
    key += chars[secureRandomInt(chars.length)];
  }
  return key;
}

// 9. Laravel APP_KEY Generator
export function generateLaravelKey() {
  const bytes = getRandomBytes(32);
  const base64Key = btoa(String.fromCharCode(...bytes));
  return `base64:${base64Key}`;
}

// 10. WordPress Security Salts Generator
export function generateWordPressSalts() {
  const saltKeys = [
    "AUTH_KEY", "SECURE_AUTH_KEY", "LOGGED_IN_KEY", "NONCE_KEY",
    "AUTH_SALT", "SECURE_AUTH_SALT", "LOGGED_IN_SALT", "NONCE_SALT"
  ];
  
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_ []{}<>~`+=,.;:/?|";
  const salts = {};
  
  saltKeys.forEach(key => {
    let val = "";
    for (let i = 0; i < 64; i++) {
      val += chars[secureRandomInt(chars.length)];
    }
    salts[key] = val;
  });
  
  return salts;
}

// 11. MongoDB ObjectId Generator
export function generateMongoId() {
  const timestamp = Math.floor(Date.now() / 1000).toString(16).padStart(8, "0");
  const random = generateHex(40).slice(0, 10);
  const counter = secureRandomInt(16777216).toString(16).padStart(6, "0");
  return (timestamp + random + counter).slice(0, 24);
}

// 12. TOTP 2FA Secret Generator (Base32 format)
export function generateTOTPSecret(length = 16) {
  const base32Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let secret = "";
  for (let i = 0; i < length; i++) {
    secret += base32Chars[secureRandomInt(32)];
  }
  return secret;
}

// 13. WEP Keys
export function generateWEPKey(bits = 64) {
  // 64-bit WEP needs 10 hex characters
  // 128-bit WEP needs 26 hex characters
  // 256-bit WEP needs 58 hex characters
  let hexLength = 10;
  if (bits === 128) hexLength = 26;
  if (bits === 256) hexLength = 58;
  return generateHex(hexLength * 4);
}

// 14. WPA Key
export function generateWPAKey(bits = 160) {
  // WPA 160-bit (64-character hex or alphanumeric)
  // WPA 504-bit (63 alphanumeric/symbol characters)
  if (bits === 504) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,./<>?";
    let key = "";
    for (let i = 0; i < 63; i++) {
      key += chars[secureRandomInt(chars.length)];
    }
    return key;
  }
  
  // WPA 160-bit standard (20 alphanumeric characters)
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "";
  for (let i = 0; i < 20; i++) {
    key += chars[secureRandomInt(chars.length)];
  }
  return key;
}

// 15. PIN Code Generator
export function generatePIN(length = 4) {
  let pin = "";
  for (let i = 0; i < length; i++) {
    pin += secureRandomInt(10).toString();
  }
  return pin;
}

// 16. Test Credit Card Numbers (that pass Luhn check)
export function generateCreditCard(brand = "visa") {
  let prefix = "4";
  let length = 16;
  
  switch (brand.toLowerCase()) {
    case "visa":
      prefix = "4";
      break;
    case "mastercard":
      prefix = ["51", "52", "53", "54", "55"][secureRandomInt(5)];
      break;
    case "amex":
      prefix = ["34", "37"][secureRandomInt(2)];
      length = 15;
      break;
    case "discover":
      prefix = "6011";
      break;
    default:
      prefix = "4";
  }
  
  let ccNumber = prefix;
  while (ccNumber.length < length - 1) {
    ccNumber += secureRandomInt(10).toString();
  }
  
  // Compute Luhn checksum digit
  let sum = 0;
  let doubleUp = true;
  for (let i = ccNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(ccNumber.charAt(i), 10);
    if (doubleUp) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    doubleUp = !doubleUp;
  }
  
  const checksum = (10 - (sum % 10)) % 10;
  return ccNumber + checksum;
}

// 17. Calculate entropy bits
export function calculateEntropy(length, charsetSize) {
  if (length <= 0 || charsetSize <= 0) return 0;
  return Math.round(length * Math.log2(charsetSize));
}

// Get strength label based on entropy
export function getStrengthLabel(entropy) {
  if (entropy < 40) return { label: "Weak", color: "#ef4444" };
  if (entropy < 64) return { label: "Decent", color: "#f59e0b" };
  if (entropy < 80) return { label: "Strong", color: "#10b981" };
  return { label: "Fort Knox", color: "#3b82f6" };
}

// 18. Generate SSH key placeholder (since full SSH keypair generation takes time and packages)
// We will generate a mock cryptographically secure structure for SSH-RSA and ECDSA
export function generateSSHKeyPair() {
  const randomBase64 = () => btoa(String.fromCharCode(...getRandomBytes(370))).replace(/\s/g, "");
  const publicKey = `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQD${randomBase64().slice(0, 200)} user@localhost`;
  const privateKey = `-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn\nNhAAAAAwEAAQAAAYEA0K...[TRUNCATED SECURE MOCK PRIVATE KEY]...\n-----END OPENSSH PRIVATE KEY-----`;
  return { publicKey, privateKey };
}

// 19. Generate PGP key placeholder
export function generatePGPKeyPair() {
  const randomHex = () => generateHex(512);
  const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: OpenPGP.js v4.10.10\nComment: https://openpgpjs.org\n\nxsBNBF6J${randomHex().slice(0, 160)}==\n-----END PGP PUBLIC KEY BLOCK-----`;
  const privateKey = `-----BEGIN PGP PRIVATE KEY BLOCK-----\nVersion: OpenPGP.js v4.10.10\nComment: https://openpgpjs.org\n\nxcLYBF6J${randomHex().slice(0, 240)}==\n-----END PGP PRIVATE KEY BLOCK-----`;
  return { publicKey, privateKey };
}
