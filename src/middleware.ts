import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("middleware");

  // try {
  //   const response = await fetch("http://localhost:8080/testz", {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   const data = await response.json();
  //   console.log("Fetch response:", data);
  // } catch (error) {
  //   console.error("Fetch failed:", error);
  // }

  console.log("middleware end");

  // Example redirection
  if (request.nextUrl.pathname === "/restaurants") {
    console.log("Redirecting to /asdasasdasd");
    return NextResponse.redirect(new URL("/asdasasdasd", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/restaurants"],
};
