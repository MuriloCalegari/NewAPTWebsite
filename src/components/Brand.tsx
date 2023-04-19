import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Stack } from 'rsuite';

const Brand = props => {
  return (
    <Stack className="brand" {...props}>
      <Link to="/">
          <Logo height={props.height} style={{ marginTop: 7, marginBottom:7 }} />
      </Link>
    </Stack>
  );
};

export default Brand;
