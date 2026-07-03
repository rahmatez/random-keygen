import PasswordGenerator from "@/components/PasswordGenerator";

export const metadata = {
  title: "Password Generator without Special Characters - RandomKeygen",
  description: "Generate secure alphanumeric passwords with no symbols or special characters — compatible with systems that restrict special characters.",
};

export default function NoSpecialCharactersPage() {
  return (
    <PasswordGenerator
      initialMode="random"
      initialLength={16}
      initialOptions={{ symbols: false }}
      title="Password Generator without Special Characters"
      description="Generate secure alphanumeric passwords (letters and numbers only, no symbols). Compatible with systems that don't accept special characters. Generated entirely in your browser."
    />
  );
}
