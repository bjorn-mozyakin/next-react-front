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
  formLogin: {
    isVisible: boolean;
    username: string;
    password: string;
    isUsingReCaptcha: boolean;
    isValid: boolean;
    isLoading: boolean;
  };
  formSignUp: StateForm;
  formRestorePass: StateForm;
}
