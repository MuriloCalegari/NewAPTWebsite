import React from 'react';
import { Icon } from '@rsuite/icons';
import PageIcon from '@rsuite/icons/Page';
import { MdDashboard } from 'react-icons/md';

export const appNavs = [
  {
    eventKey: 'course_apts',
    icon: <Icon as={MdDashboard} />,
    title: 'Course APTs',
    to: '/course_apts'
  },
  {
    eventKey: 'textbook',
    icon: <Icon as={PageIcon} />,
    title: 'Textbook',
    to: '/textbook'
  },
  {
    eventKey: 'journey',
    icon: <Icon as={PageIcon} />,
    title: 'Journey',
    to: '/journey'
  },
];
