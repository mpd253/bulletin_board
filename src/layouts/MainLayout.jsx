import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@pages';

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainLayout;
