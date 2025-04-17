import { Login } from "./Login";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = await searchParams;
  const wantsMagicLink = params.magicLink === "yes"
  return <Login isPasswordLogin={!wantsMagicLink} />;
}
