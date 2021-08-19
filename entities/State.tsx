export interface StateForm {
  isVisible: boolean;
  isUsingReCaptcha: boolean;
  isValid: boolean;
  isLoading: boolean;
}

export interface State {
  banners?: any;
  threads?: any;
  isSidebarVisible?: boolean;
  isLoginFormVisible?: boolean;
  isSearchFormVisible?: boolean;
  scrolledPageCount: number;
  reCaptcha: string | null;
  fingerprint: string | null;
  formLogin: StateForm & {
    email: string;
    password: string;
  };
  formSignUp: StateForm & {
    username: string;
    email: string;
    subscribe: boolean;
    rules: boolean;
  };
  formRestorePass: StateForm & {
    email: string;
  };
}
