/* --- STATE --- */
export interface loginFormState {
  loading: boolean;
  data: any | null;
}

/*
  If you want to use 'ContainerState' keyword everywhere in your feature folder,
  instead of the 'loginForm' keyword.
*/
export type ContainerState = loginFormState;
