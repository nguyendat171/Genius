import React, { FC, useState } from 'react';
import { iconPassword } from 'assets/images';
import { IconEye, IconEyeOff } from 'components/common/svg';

type TCustomInput = {
  value: string | number;
  errors: any;
  touched: any;
  onChange: Function | any;
  onBlur: Function | any;
};
const CustomInput: FC<TCustomInput> = ({
  value,
  errors,
  touched,
  onChange,
  onBlur,
}) => {
  const [isShowPw, setIsShowPw] = useState(false);
  return (
    <div className="form-group">
      <div className="form-group__icon">
        <img src={iconPassword} alt="username" />
      </div>
      <div className="form-group__input">
        <label>Password</label>
        <input
          type={isShowPw ? 'text' : 'password'}
          className="form-control"
          name="password"
          placeholder="Enter your password"
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
        {errors.password && touched.password && (
          <div className="form-group__error">{errors.password}</div>
        )}
      </div>{' '}
      <div className="form-group__eye" onClick={() => setIsShowPw(!isShowPw)}>
        {isShowPw ? <IconEye /> : <IconEyeOff />}
      </div>
    </div>
  );
};
export default CustomInput;
