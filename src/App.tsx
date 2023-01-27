import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locales from './locales';
import Frame from './components/Frame';
import Error404Page from './pages/authentication/404';

import { appNavs } from './config';
import {CourseApts} from "@/pages/courseapts/CourseApts";
import {useObserver} from "mobx-react-lite";

const App = () => {
  return useObserver(() => (
    <IntlProvider locale="en" messages={locales.en}>
        <Routes>
          <Route path="/" element={<Frame navs={appNavs}/>}>
            <Route index element={<CourseApts/>}/>
            <Route path="course_apts" element={<CourseApts/>}/>
          </Route>
          <Route path="*" element={<Error404Page/>}/>
        </Routes>
    </IntlProvider>
  ));
};

export default App;
