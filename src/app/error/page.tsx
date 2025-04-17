import Link from "next/link";

export default function ErrorPage({
  searchParams,
}: {
  searchParams: any
}) {
  const type = searchParams.type;
  const typeParam = Array.isArray(type) ? type[0] : type;
  const knownErrors = ["login-failed", "magiclink"];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ooops!</h1>
      {type === "login-failed" && (
        <strong>Login was not successfull, sorry.</strong>
      )}

      {type === "magiclink" && (
        <strong>
          Could not send a magic link. Maybe you had a typo in your e-mail?
        </strong>
      )}
      {typeParam && !knownErrors.includes(typeParam) && (
        <strong>
          Something went wrong. Please try again or contact support.
        </strong>
      )}
      <br />
      <br />
      <Link role="button" href="/">
        Go back.
      </Link>
    </div>
  );
}
