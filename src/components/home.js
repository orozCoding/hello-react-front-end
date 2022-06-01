import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings, getRandomGreeting } from '../redux/reducers';

const Home = () => {
  const { greetings, randomGreeting } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <>
      <p>{`There are ${greetings.length} greetings, and this is a random one:`}</p>
      <h3>{randomGreeting.text}</h3>
      <p>Reload the page to get a new random greeting</p>
    </>
  );
};

export default Home;
