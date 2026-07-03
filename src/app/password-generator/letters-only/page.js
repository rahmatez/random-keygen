import PasswordGenerator from "@/components/PasswordGenerator";

export const metadata = {
  title: "Letters Only Password Generator - RandomKeygen",
  description: "Generate secure passwords using only letters (A-Z, a-z) — ideal for systems that only accept alphabetic characters.",
};

export default function LettersOnlyPage() {
  return (
    <PasswordGenerator
      initialMode="random"
      initialLength={16}
      initialOptions={{ numbers: false, symbols: false }}
      title="Letters Only Password Generator"
      description="Generate secure passwords using only letters (uppercase and lowercase) with no numbers or symbols. Ideal for systems that only accept alphabetic characters."
    />
  );
}
