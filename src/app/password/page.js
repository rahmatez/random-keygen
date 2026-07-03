import PasswordGenerator from "@/components/PasswordGenerator";

export const metadata = {
  title: "Secure Password Generator - RandomKeygen",
  description: "Generate secure, random, and strong passwords client-side using standard cryptographic libraries.",
};

export default function PasswordPage() {
  return <PasswordGenerator initialMode="random" initialLength={16} />;
}
