import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './styles.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='nav-container'>
      <div className='nav-bar'>
        <List className={click ? "nav-menu active" : "nav-menu"}>
          <ListItem className='list-item' onClick={closeMobileMenu}>
            <Link to='/'>Home</Link>
          </ListItem>
          <ListItem className='list-item' onClick={closeMobileMenu}>
            <Link to='/repos'>Repos</Link>
          </ListItem>
          <ListItem className='list-item' onClick={closeMobileMenu}>
            <Link to='/events'>Events</Link>
          </ListItem>
          <ListItem className='list-item' onClick={closeMobileMenu}>
            <Link to='/hooks'>Hooks</Link>
          </ListItem>
          <ListItem className='list-item' onClick={closeMobileMenu}>
            <Link to='/issues'>Issues</Link>
          </ListItem>
          <ListItem className='list-item' onClick={closeMobileMenu}>
            <Link to='/members'>Members</Link>
          </ListItem>
          <ListItem className='list-item' onClick={closeMobileMenu}>
            <Link to='/public-members'>Public Members</Link>
          </ListItem>
        </List>
      </div>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon"/>
        ) : (
          <MenuIcon className="menu-icon"/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
