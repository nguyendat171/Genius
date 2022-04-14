import React from 'react';
import { useAppSelector } from 'hooks';
import './styles.scss';

const Loader = () => {
  const loading = useAppSelector(state => state?.loginForm?.loading || false);
  if (!loading) return null;
  return (
    <div className="container-loading">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
