import React from 'react';
import { Icon } from '@rsuite/icons';
import PageIcon from '@rsuite/icons/Page';
import { MdDashboard } from 'react-icons/md';
import { AiOutlineUsergroupAdd,AiOutlineOrderedList, AiOutlineTrophy, AiOutlineHighlight, AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
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
    title: 'Bookmark',
    to: '/contents/bookmark'
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
