import React from 'react';
import { getTimeOrder } from './time';
import shedule from './doctorsSchedule.json';

const App = () => {
  const { start, appointments, end } = shedule;
  const order = getTimeOrder(start, appointments, end);

  return <div>[{order.join(', ')}]</div>;
};

export default App;
