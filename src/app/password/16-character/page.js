import PasswordGenerator from "@/components/PasswordGenerator";

export const metadata = {
  title: "16 Character Password Generator - RandomKeygen",
  description: "Generate 16-character secure random passwords — the recommended length for most accounts and services.",
};

export default function Password16CharPage() {
  return (
    <PasswordGenerator
      initialMode="random"
      initialLength={16}
      title="16 Character Password Generator"
      description="Generate secure 16-character passwords — the recommended length for most online accounts and services. Cryptographically generated in your browser."
    />
  );
}
