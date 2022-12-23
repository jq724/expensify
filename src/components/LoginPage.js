import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginWithAnonymously } from '../actions/auth';

// 2021-02-11 新增匿名登入機制
export const LoginPage = ({ startLogin, startLoginWithAnonymously }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLogin}>Google登入</button>
      <button className="button button--divider" onClick={startLoginWithAnonymously}>匿名登入</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginWithAnonymously: () => dispatch(startLoginWithAnonymously())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
