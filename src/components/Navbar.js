import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-heading'>
        <h2>Joke Generator</h2>
      </div>
      <div className='navbar-list'>
        <ul className='links'>
          <div className='li-home'>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </div>
          <div className='li-about'>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </div>
          <div className='li-contact'>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
