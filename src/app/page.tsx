import { Login } from "./Login";

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // const wantsMagicLink = searchParams?.magicLink === "yes";
  const wantsMagicLink = true;
  return <Login isPasswordLogin={!wantsMagicLink} />;
}
