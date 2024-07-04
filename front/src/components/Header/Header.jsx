import { logo } from '@assets/images/ImagePath.js';

import './Header.scss';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClicked = () => {
    navigate('/');
  };

  return (
    <div className="header-container">
      <FaBars id="left-icon" size="24" />
      <div className="header-logo">
        <img src={logo} alt="logo" onClick={handleLogoClicked} />
      </div>
      <FaSearch id="right-icon" size="24" />
    </div>
  );
};

export default Header;
