import React from 'react';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { logo } from 'assets/images';
import { useAppSelector, useAppDispatch } from 'hooks';
import { useLoginFormSlice } from './slice';
import { CustomInputUsername, CustomInputPassword } from 'components/Login';
import * as Yup from 'yup';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { actions } = useLoginFormSlice();
  const history = useHistory();
  const loading = useAppSelector(state => state?.loginForm?.loading || false);
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      if (loading) return;
      dispatch(
        actions.checkLogin({
          params: {
            username: values.username,
            password: values.password,
          },
          cb: () => history.push('/'),
        }),
      );
    },
  });

  return (
    <div className="page-login">
      <div className="page-login__content">
        <div className="w-100 d-flex flex-column align-items-center">
          <img src={logo} alt="Daoukiwoom" />
          <div className="page-login__form mt-5">
            <div className="page-login__title">Welcome back,</div>
            <div className="page-login__message">
              please login to your account
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="page-login__inner">
                <CustomInputUsername
                  value={formik.values.username}
                  errors={formik.errors}
                  touched={formik.touched}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <CustomInputPassword
                  value={formik.values.password}
                  errors={formik.errors}
                  touched={formik.touched}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="page-login__button">
                <Link to="/" type="button" className="btn btn-forgot">
                  Forgot password?
                </Link>
                <button type="submit" className="btn btn-primary btn-login">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
