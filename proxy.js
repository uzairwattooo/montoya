import { NextResponse } from "next/server";

export function proxy(request) {
  const session =
    request.cookies.get("better-auth.session_token");

  const path = request.nextUrl.pathname;

  const isProtected =
    path.startsWith("/dashboard") ||
    path.startsWith("/admin/admindashboard");
  
  if (isProtected && !session) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${path}`, request.url)
    );
  }

  return NextResponse.next();
}
