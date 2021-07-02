import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is frontend javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is favourite JS frontend library among engineers',
  },
  {
    title: 'How use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'Shade of blue',
    value: 'blue',
  },
  {
    label: 'Green',
    value: 'green',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
