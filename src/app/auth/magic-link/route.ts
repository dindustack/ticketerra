import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email");
  console.log("Received email:", email);

  const supabase = await getSupabaseCookiesUtilClient();

  if (typeof email !== "string") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false },
  });


  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      302
    );
  }

  const thanksUrl = new URL("/magic-thanks", request.url);

  return NextResponse.redirect(thanksUrl, 302);
}
