import React, { FC } from 'react';
import { iconUser } from 'assets/images';

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
  return (
    <div className="form-group">
      <div className="form-group__icon">
        <img src={iconUser} alt="username" />
      </div>
      <div className="form-group__input">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter your username"
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
        {errors.username && touched.username ? (
          <div className="form-group__error">{errors.username}</div>
        ) : null}
      </div>
    </div>
  );
};
export default CustomInput;
