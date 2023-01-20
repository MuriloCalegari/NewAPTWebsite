import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Stack } from 'rsuite';

const Brand = props => {
  return (
    <Stack className="brand" {...props}>
      <Link to="/">
          <Logo height={48} style={{ marginTop: 6 }} />
      </Link>
    </Stack>
  );
};

export default Brand;
