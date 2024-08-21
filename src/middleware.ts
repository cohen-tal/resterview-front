import { auth, signOut } from "../auth";

export default auth((req) => {
  if (!req.auth || req.auth?.error) {
    const newUrl = new URL("/authorized", req.nextUrl.origin);
    signOut();
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/restaurants/new", "/profile", "/reviews/writereview"],
};
