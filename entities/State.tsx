export interface State {
  banners?: any;
  threads?: any;
  isSidebarVisible?: boolean;
  isLoginFormVisible?: boolean;
  isSearchFormVisible?: boolean;
  scrolledPageCount: number;
  reCaptcha: string | null;
  fingerprint: string | null;
}

export interface StateForm {
  isVisible: boolean;
  isUsingReCaptcha: boolean;
  isValid: boolean;
  isLoading: boolean;
}

export interface StateSidebar {
  isSidebarVisible: boolean;
}

export type StateFormLogin = StateForm & {
  email: string;
  password: string;
};

export type StateFormSignUp = StateForm & {
  username: string;
  email: string;
  subscribe: boolean;
  rules: boolean;
};

export type StateFormRestorePass = StateForm & {
  email: string;
};
