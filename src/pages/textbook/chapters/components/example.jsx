import React from 'react';
import { Panel } from 'rsuite';

const Example = ({ title, description }) => (
  <Panel header={title} bordered>
    <div>{description}</div>
  </Panel>
);

export default Example;
