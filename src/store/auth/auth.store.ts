import { create } from 'zustand';
import Cookie from 'js-cookie';

import AuthService from '../../service/auth.service';
import { AuthStoreType, DataLoginType, UserLoginResponseType } from '../../types/auth/auth.type';

const authService = new AuthService()

const useAuthStore = create<AuthStoreType>((set) => ({
  isAuthenticated: false,
  errorMessage: "",
  loginService: async (data: DataLoginType) => {
    try {
      const response = await authService.login(data) as UserLoginResponseType;
      if (response) {
        set({ isAuthenticated: true })
        Cookie.set('token', response.data.token)
      } else { set({ isAuthenticated: false }) }
    } catch (error) {
      const status = (error as { status?: number })?.status;
      const errorMessage = "Não foi possível fazer login. Verifique suas credenciais e tente novamente."
      if (status === 401) {
        set({ errorMessage, isAuthenticated: false })
      } else {
        set({ isAuthenticated: false })
      }
    }
  }
}));

export default useAuthStore;