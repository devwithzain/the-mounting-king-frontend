import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
   const token = request.cookies.get("adminAuthToken")?.value;

   const isAuth = !!token;
   const isAccessingDashboard = request.nextUrl.pathname.startsWith("/admin/dashboard");
   const isAccessingLogin = request.nextUrl.pathname === "/admin/login";

   // If user is not authenticated and tries to access dashboard, redirect to login
   if (!isAuth && isAccessingDashboard) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
   }

   // If user is authenticated and tries to access login page, redirect to dashboard
   if (isAuth && isAccessingLogin) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
   }

   return NextResponse.next();
}
