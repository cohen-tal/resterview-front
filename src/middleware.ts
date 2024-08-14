import { auth } from "../auth";

export default auth((req) => {
  if (!req.auth || req.auth?.error) {
    const newUrl = new URL("/authorized", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/restaurants/new", "/profile", "/reviews/writereview"],
};
