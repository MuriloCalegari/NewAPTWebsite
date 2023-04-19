import React from 'react';
import { chaptersData } from '../chapters';
import Link from 'next/link';

const RunestoneIndexPage: React.FC = () => {
  return (
    <div>
      <h1>Runestone Content</h1>
      <ul>
        {chaptersData
          .filter((chapter) => chapter.id.startsWith('runestone-'))
          .map((chapter) => (
            <li key={chapter.id}>
              <Link href={chapter.path}>
                <a>{chapter.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RunestoneIndexPage;
