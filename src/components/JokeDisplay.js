import { Fragment, useContext } from 'react';
import { JokeContext } from '../contexts/JokeContext';

const JokeDisplay = () => {
  const { jokes } = useContext(JokeContext);

  if (jokes.length) {
    return (
      <Fragment>
        <div>
          {jokes.map((joke) => (
            <div className='joke-list'>
              <p className='joke-list-ques'>{joke.setup} </p>
              <p className='joke-list-ans'>{joke.punchline}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  } else {
    return null;
  }

  // if (jokes.length) {
  //   console.log('passed length condition');
  //   return jokes.map((joke) => {
  //     console.log('in map loop');
  //     <div className='joke-display'>
  //       Question: {joke.setup}
  //       Answer: {joke.punchline}
  //     </div>;
  //   });
  // } else {
  //   return null;
  // }
};

export default JokeDisplay;
