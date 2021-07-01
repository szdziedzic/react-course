import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
