import { AUTH_KEY } from "@/constants/variables";
import { signOutCookie } from "./server";

export const signOut = () => {
   signOutCookie()
   localStorage.removeItem(AUTH_KEY)
   window.location.reload()
}