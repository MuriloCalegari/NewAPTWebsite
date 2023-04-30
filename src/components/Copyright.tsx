import React from 'react';
import { Stack } from 'rsuite';

const Copyright = () => {
  return (
    <Stack className="copyright" justifyContent="center" style={{ height: 40, marginTop: 20 }}>
      <div className="container">
        <p>
          © 2023, Made by students at CS 390 Spring 2023
          {/*<a href="https://github.com/MuriloCalegari" target="_blank" rel="noreferrer">*/}
          {/*  Murilo Calegari*/}
          {/*</a>*/}
          {/*{' and '}*/}
          {/*<a href="https://github.com/teyaevans" target="_blank" rel="noreferrer">*/}
          {/*  Teya Evans*/}
          {/*</a>*/}
        </p>
      </div>
    </Stack>
  );
};

export default Copyright;
