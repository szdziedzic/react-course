import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('aaa');
  }, [term]);

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter search term</label>
        <input
          className="input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
