import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Writer, Footer } from '@components';

import { Home } from '@pages';

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Writer />
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
