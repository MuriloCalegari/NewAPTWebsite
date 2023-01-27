import React from 'react';
import { Panel } from 'rsuite';
import Copyright from '@/components/Copyright';

const PageContent = props => {
  return (
    <>
      <Panel className="page-content" {...props} />
      <Copyright />
    </>
  );
};

export default PageContent;
