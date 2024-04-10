interface RootState {
  accessToken: string | null;
  setAccessToken: (acessToken: string | null) => void;
}

export default RootState;
