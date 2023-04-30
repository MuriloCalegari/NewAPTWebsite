import React from 'react';
import { Panel } from 'rsuite';

const Challenge = ({ title, description }) => {
  return (
    <Panel header={title} bordered>
      {description}
    </Panel>
  );
};

export default Challenge;
