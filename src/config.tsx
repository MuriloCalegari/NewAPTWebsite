import React from 'react';
import { Icon } from '@rsuite/icons';
import { AiOutlineUsergroupAdd, AiOutlineOrderedList, AiOutlineTrophy, AiOutlineHighlight, AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsBookmark, BsTerminal } from 'react-icons/bs';
import TextImageIcon from '@rsuite/icons/TextImage';

export const appNavs = [
  {
    eventKey: 'contents',
    icon: <Icon as={AiOutlineOrderedList} />,
    title: 'Table of Contents',
    to: '/contents'
  },
  {
    eventKey: 'bookmarked',
    icon: <Icon as={BsBookmark} />,
    title: 'Bookmarks',
    to: '/contents/bookmarks'
  },
  {
    eventKey: 'journey',
    icon: <Icon as={AiOutlineTrophy} />,
    title: 'Journey',
    to: '/contents/journey'
  },
  {
    eventKey: 'highlights',
    icon: <Icon as={AiOutlineHighlight} />,
    title: 'Highlights',
    to: '/contents/highlights'
  },
  {
    eventKey: 'threads',
    icon: <Icon as={TextImageIcon} />,
    title: 'Threads',
    to: '/contents/threads'
  },
  {
    eventKey: 'friends',
    icon: <Icon as={AiOutlineUsergroupAdd} />,
    title: 'Friends',
    to: '/contents/friends'
  },
  {
    eventKey: 'course_apts',
    icon: <Icon as={BsTerminal} />,
    title: 'Course APTs',
    to: '/contents/course_apts'
  },
  {
    eventKey: 'search',
    icon: <Icon as={AiOutlineSearch} />,
    title: 'Search',
    to: '/contents/search'
  },
  {
    eventKey: 'help',
    icon: <Icon as={AiOutlineQuestionCircle} />,
    title: 'Help Center',
    to: '/contents/help'
  },
];
