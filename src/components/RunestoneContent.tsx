import React from 'react';
import { chaptersData } from '../../pages/textbook/chapters/chapters';

const RunestoneContent: React.FC = () => {
  return (
    <div>
      <h2>Runestone Content</h2>
      <ul>
        {chaptersData
          .filter((chapter) => chapter.id.startsWith('runestone-'))
          .map((chapter) => (
            <li key={chapter.id}>
              <a href={chapter.path}>{chapter.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RunestoneContent;
