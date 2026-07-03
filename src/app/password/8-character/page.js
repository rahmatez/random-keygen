import PasswordGenerator from "@/components/PasswordGenerator";

export const metadata = {
  title: "8 Character Password Generator - RandomKeygen",
  description: "Generate 8-character secure random passwords for legacy systems and strict length requirements.",
};

export default function Password8CharPage() {
  return (
    <PasswordGenerator
      initialMode="random"
      initialLength={8}
      title="8 Character Password Generator"
      description="Generate secure 8-character passwords for legacy systems and platforms with strict length requirements. All passwords are generated entirely in your browser."
    />
  );
}
