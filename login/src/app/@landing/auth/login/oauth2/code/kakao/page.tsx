"use client";

import { setRefreshTokenCookie } from "@/app/action";
import { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { use, useEffect } from "react";
import { useAuthStore } from "@/store/user";

const KakaoLogin: NextPage = () => {
  const { login } = useAuthStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const code: string | null = searchParams!.get("code");

const loginHandler = async (code: string | null) => {
  if (code) {
    try {
      await login(code);
      router.push("/");
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      // 오류 처리
    }
  }
  };
  
  // const loginHandler = async (code: string | null) => {
  //   const response: Response = await fetch(
  //     `/api/auth/login/oauth2/code/kakao?code=${code}`
  //   );

  //   if (response.ok) {
  //     // 응답으로부터 토큰정보 추출
  //     const accessToken: string = response.headers.get("Authorization") ?? "";
  //     const refreshToken: string =
  //       response.headers.get("AuthorizationRefresh") ?? "";

  //     // 리프레쉬 토큰 쿠키에 저장
  //     await setRefreshTokenCookie(refreshToken);
  //     // 액세스 토큰 전역 상태+로컬스토리지에 저장
  //     login(accessToken);
  //     router.push("/");
  //   } else {
  //     console.log("로그인 실패", response.status);
  //     alert("로그인 중 에러가 발생했습니다.");
  //     router.push("/");
  //   }
  // };

  useEffect(() => {
    if (code) {
      loginHandler(code);
    }
  }, []);

  return <></>;
};

export default KakaoLogin;
