import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locales from './locales';
import Frame from './components/Frame';
import Error404Page from './pages/authentication/404';

import { appNavs } from './config';
import {CourseApts} from "@/pages/courseapts/CourseApts";
import {useObserver} from "mobx-react-lite";
import {TextbookChapters} from "@/pages/textbook/TextbookChapters";
import {TextbookContent} from "@/pages/textbook/TextbookContent";
import {Journey} from "@/pages/journey/Journey";

const App = () => {
  return useObserver(() => (
    <IntlProvider locale="en" messages={locales.en}>
        <Routes>
            <Route path="/" element={<Frame navs={appNavs}/>}>
                <Route index element={<CourseApts/>}/>
                <Route path="course_apts" element={<CourseApts/>}/>
                <Route path="textbook" element={<TextbookChapters/>}/>
                <Route path="textbook/:chapter" element={<TextbookContent/>}/>
                <Route path="journey" element={<Journey/>}/>
            </Route>
            <Route path="*" element={<Error404Page/>}/>
        </Routes>
    </IntlProvider>
  ));
};

export default App;
