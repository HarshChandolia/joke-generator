import { createContext, useState } from 'react';

export const JokeContext = createContext();

const JokeContextProvider = (props) => {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async (category) => {
    const res = await fetch(
      `https://official-joke-api.appspot.com/jokes/${category}`
    );
    const resData = await res.json();

    if (resData.type === 'general') {
      const { id, type, setup, punchline } = resData;
      setJokes([{ id, type, setup, punchline }]);
    } else {
      setJokes(resData);
    }

    // jokes.map((joke) => {
    //   console.log(`joke id: ${joke.id}`);
    // });

    // jokes.forEach(([key, value]) => {
    //   console.log(key);
    //   console.log(value);
    // });

    // const ques = jokes.find((item) => item.key === 'setup');
    // const quesResult = ques['value'];

    // console.log('id: ' + id);
    // console.log('type: ' + type);
    // console.log('setup: ' + setup);
    // console.log('punchline: ' + punchline);
  };

  return (
    <JokeContext.Provider value={{ fetchJokes, jokes }}>
      {props.children}
    </JokeContext.Provider>
  );
};

export default JokeContextProvider;
