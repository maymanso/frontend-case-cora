export interface DataLoginType {
  login: string;
  password: string;
}

export type AuthStoreType = {
  isAuthenticated: boolean;
  errorMessage: string;
  loginService: (data: DataLoginType) => Promise<void>;
};

export type UserLoginResponseType = {
  data: {
    token: string;
  }
}
