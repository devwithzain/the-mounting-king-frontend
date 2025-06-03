import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
   const admintoken = request.cookies.get("adminAuthToken")?.value;

   const isAdminAuth = !!admintoken;
   const isAccessingDashboard = request.nextUrl.pathname.startsWith("/dashboard");
   const isAccessingLogin = request.nextUrl.pathname === "/";

   // If admin is not authenticated and tries to access dashboard, redirect to login
   if (!isAdminAuth && isAccessingDashboard) {
      return NextResponse.redirect(new URL("/", request.url));
   }

   // If admin is authenticated and tries to access login page, redirect to dashboard
   if (isAdminAuth && isAccessingLogin) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
   }

   return NextResponse.next();
}

export const config = {
   matcher: ["/dashboard/:path*"],
};
