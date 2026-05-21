import { authClient } from "../lib/auth-client";

export const requireAuth = async () => {
  const session = await authClient.getSession();

  if (!session?.data?.user) {
    return null;
  }

  return session.data.user;
};