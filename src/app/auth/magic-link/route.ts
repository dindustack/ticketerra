import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email");

  const supabaseAdmin = await getSupabaseAdminClient();
  
  if (typeof email !== "string") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink({
    email,
    type: "magiclink",
  });


  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      302
    );
  }

  const { hashed_token } = linkData.properties;

  const constructedLink = new URL(`/auth/verify/?hashed_token=${hashed_token}`, request.url);
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 54325,
  });
  await transporter.sendMail({
    from: "Ticketerra <jane@ticketerra.com>",
    to: email,
    subject: "Magic Link",
    html: `
    <h1>Hello there, you requested a custom magic link, find it below.</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a></p> to login.
    `
  })

  const thanksUrl = new URL("/magic-thanks", request.url);

  return NextResponse.redirect(thanksUrl, 302);
}
