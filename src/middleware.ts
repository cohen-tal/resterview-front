import { auth } from "../auth";

export default auth((req) => {
  if (req.auth?.error) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/restaurants/new", "/profile"],
};
