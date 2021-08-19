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
  };
  formSignUp: {
    isVisible: boolean;
  };
  formRestorePass: {
    isVisible: boolean;
  };
}
