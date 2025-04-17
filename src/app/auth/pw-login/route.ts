import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const supabase = await getSupabaseCookiesUtilClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  const userData = data?.user;
  if (error || !userData) {
    return NextResponse.redirect(
      new URL("/error?type=login-failed", request.url),
      { status: 302 }
    );
  }

  return NextResponse.redirect(new URL("/tickets", request.url), {
    status: 302,
  });
}
