// TODO Когда начнем получать реальные рубрики - добавить им типы
export interface State {
  banners?: any;
  threads?: any;
  isSidebarVisible?: boolean;
  isLoginFormVisible?: boolean;
  isSearchFormVisible?: boolean;
  scrolledPageCount: number;
  reCaptcha: string | null;
  fingerprint: string | null;
  myRubrics: any[];
  allRubrics: any[];
}

export interface StateForm {
  isVisible: boolean;
  isUsingReCaptcha: boolean;
  reCaptchaAction?: string;
  isValid: boolean;
  isLoading: boolean;
  errorMsg: string;
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
  isStep1Visible: boolean;
  isStep2Visible: boolean;
  email: string;
};
