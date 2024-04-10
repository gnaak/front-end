'use client'

import { useEffect } from "react";
import ClientOnly from "@/components/ClientOnly";
import { useAuthStore } from "@/store/user";
// import { reissueToken } from "@/app/services/reissueToken";


interface AuthProviderProps {
  children: React.ReactNode;
  landing: React.ReactNode;
  // refreshTokenCookie: string;
}

const AuthProvider = ({
  children,
  landing,
  // refreshTokenCookie,
}: AuthProviderProps) => {
  const { login, logout } = useAuthStore(); 
  const accessToken = useAuthStore.getState().accessToken
  // useEffect(() => {
  //   if (!accessToken) {
  //     console.log("hi");
  //     reissueToken(accessToken, login);
  //   }

    // if (!refreshTokenCookie) {
    //   console.log("no refresh token");
    //   logout();
    // }
  // }, [accessToken]);

  return <ClientOnly>{accessToken ? children : landing}</ClientOnly>;
};

export default AuthProvider;
