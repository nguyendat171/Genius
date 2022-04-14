export function getUserRegister() {
  const user: any = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null;
  return JSON.parse(user);
}

export function setUserRegister(user: string) {
  return localStorage.setItem('user', user);
}
