
import { getSupabaseReqResClient } from "@/supabase-utils/reqResClient";
import {  NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const { supabase, response } = getSupabaseReqResClient(request);
  const session = await supabase.auth.getSession();
  const requestedPath = request.nextUrl.pathname;
  const sesssionUser = session.data?.session?.user;
  if (requestedPath.startsWith("/tickets")) {
    if(!sesssionUser) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  } else if (requestedPath === "/") {
    if(sesssionUser) {
    return NextResponse.redirect(new URL("/tickets", request.url))
    }
  }
  return response.value;
}

export const config = {
  matcher: ["/((?!.*\\.).*)"],
}