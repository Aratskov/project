import Header from 'components/Header/Header';
import ModalBurger from 'components/ModalBurger/ModalBurger';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const burg = useSelector(state=>state.burger)
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{color:"#f3f3f3", textAlign:"center"}}>Loading..</div>}>
        <main >
          {!burg&&<Outlet />}
          {burg&&<ModalBurger />}
        </main>
        <footer></footer>
      </Suspense>
    </>
  );
};

export default SharedLayout;
