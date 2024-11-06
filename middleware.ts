import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("token");

	if (request.nextUrl.pathname === "/login") {
		if (token) {
			// If user is authenticated, redirect to home page
			return NextResponse.redirect(new URL("/", request.url));
		}
		return NextResponse.next(); // Proceed to the login page
	}

	if (!token) {
		// User is not authenticated, redirect to login
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next(); // Proceed to the requested page if authenticated
}

export const config = {
	matcher: ["/", "/login", "/search"],
};
