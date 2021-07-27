import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      This is the about page. Nothing here.
      <p>
        <Link to='/'>Back to homepage</Link>
      </p>
    </div>
  );
};

export default About;
