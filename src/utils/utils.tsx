import { toast } from 'react-toastify';
import numeral from 'numeral';

const toastList = new Set();
const MAX_TOAST = 5;
export const showToast = (type: string, message: string) => {
  if (toastList.size < MAX_TOAST) {
    const id = toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: type === 'success' || type === 'info' ? 5000 : 7000,
      onClose: () => toastList.delete(id),
    });
    toastList.add(id);
  }
};
const toastListBlockedLogin = new Set();
const MAX_TOAST_BLOCKED_LOGIN = 1;
export const showToastBlockedLogin = (type: string, message: string) => {
  if (toastListBlockedLogin.size < MAX_TOAST_BLOCKED_LOGIN) {
    const id = toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      onClose: () => toastListBlockedLogin.delete(id),
    });
    toastListBlockedLogin.add(id);
  }
};

export const formatNumber = number => {
  if (number) {
    return numeral(number).format('0,0');
  }
  return 0;
};
