"use server";

import { cookies } from "next/headers";

export async function getRefreshTokenCookie() {
  const refreshToken: string =
    cookies().get("AuthorizationRefresh")?.value ?? "";
  return refreshToken;
}

export async function setRefreshTokenCookie(refreshToken: string) {
  cookies().set("AuthorizationRefresh", refreshToken, {
    httpOnly: true,
    secure: true,
  });
}

export async function removeRefreshTokenCookie() {
  cookies().delete("AuthorizationRefresh");
}
