import React from 'react';
import { Icon } from '@rsuite/icons';
import PageIcon from '@rsuite/icons/Page';
import { MdDashboard } from 'react-icons/md';
import { AiOutlineUsergroupAdd,AiOutlineOrderedList, AiOutlineTrophy, AiOutlineHighlight, AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';

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
    title: 'Bookmark',
    to: '/bookmark'
  },
  {
    eventKey: 'journey',
    icon: <Icon as={AiOutlineTrophy} />,
    title: 'Journey',
    to: '/journey'
  },
  {
    eventKey: 'highlights',
    icon: <Icon as={AiOutlineHighlight} />,
    title: 'Highlights',
    to: '/highlights'
  },
  {
    eventKey: 'help',
    icon: <Icon as={AiOutlineQuestionCircle} />,
    title: 'Help Center',
    to: '/help'
  },
  {
    eventKey: 'search',
    icon: <Icon as={AiOutlineSearch} />,
    title: 'Search Book',
    to: '/search'
  },
  {
    eventKey: 'home',
    icon: <Icon as={MdDashboard} />,
    title: 'Home',
    to: '/home'
  },
  {
    eventKey: 'course_apts',
    icon: <Icon as={MdDashboard} />,
    title: 'Course APTs',
    to: '/course_apts'
  },
  {
    eventKey: 'friends',
    icon: <Icon as={AiOutlineUsergroupAdd} />,
    title: 'Friends',
    to: '/friends'
  },
  
];
