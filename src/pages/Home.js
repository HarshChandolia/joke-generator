import { Fragment, useState, useContext } from 'react';
import JokeDisplay from '../components/JokeDisplay';
import { JokeContext } from '../contexts/JokeContext';

const Home = () => {
  const { fetchJokes } = useContext(JokeContext);

  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchJokes(category);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className='home'>
          <h3>Bored? Select a category:</h3>
          <label>Category: </label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option> </option>
            <option value='random'>Random</option>
            <option value='ten'>Random 10</option>
            <option value='programming/random'>Programming</option>
          </select>
          <div className='joke-category-submit'>
            <input type='submit' value='Submit' />
          </div>
        </div>
      </form>
      <JokeDisplay />
    </Fragment>
  );
};

export default Home;
