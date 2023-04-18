import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      AuthNav
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
};

export default AuthNav;
