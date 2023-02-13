import React from 'react';
import { Icon } from '@rsuite/icons';
import { VscCalendar } from 'react-icons/vsc';
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
    icon: <Icon as={VscCalendar} />,
    title: 'Textbook chapter',
    to: '/textbook'
  },
];
