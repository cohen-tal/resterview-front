import MenuLinkItem from "./menu-items/MenuLinkItem";
import { signIn, signOut, auth } from "../../../../auth";
import AccountDropdownMenu from "./AccountDropdownMenu";
import LoginButton from "../buttons/LoginButton";

export default async function DesktopMenu() {
  const session = await auth();

  async function handleLogin() {
    "use server";
    await signIn();
  }

  async function handleLogout() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <div className="hidden sm:flex items-center gap-4">
      <MenuLinkItem text="Home" href="/" />
      <MenuLinkItem text="Restaurants" href="/restaurants" />
      <MenuLinkItem text="Discover" href="/" />
      {session ? (
        <AccountDropdownMenu onClickLogout={handleLogout} />
      ) : (
        <LoginButton func={handleLogin} />
      )}
    </div>
  );
}
