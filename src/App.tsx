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
import {Home} from "@/pages/home/Home";
import {Friends} from "@/pages/friends/Friends";

const App = () => {
  return useObserver(() => (
    <IntlProvider locale="en" messages={locales.en}>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Frame navs={appNavs}/>}>
                <Route index element={<CourseApts/>}/>
                <Route path="course_apts" element={<CourseApts/>}/>
                <Route path="contents" element={<TextbookChapters/>}/>
                <Route path="contents/:chapter" element={<TextbookContent/>}/>
                <Route path="journey" element={<Journey/>}/>
                <Route path="friends" element={<Friends/>}/>
            </Route>
            <Route path="*" element={<Error404Page/>}/>
        </Routes>
    </IntlProvider>
  ));
};

export default App;
