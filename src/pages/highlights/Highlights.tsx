import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { data } from './highlight-data';
import './styles.less';

export const Highlights = observer(() => {
  const navigate = useNavigate();

  function goToContents(location: string) {
    navigate(location);
  }

  return (
    <div className="highlights-container">
      <h1 className="highlights-title">Highlights:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="highlight-item">
            <p className="highlight-text">"{item.content}"</p>
            <button onClick={() => { goToContents(item.location); }}>Go there.</button>
          </li>
        ))}
      </ul>
    </div>
  );
});
