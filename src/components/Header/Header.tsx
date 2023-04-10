import React, { useRef } from 'react';
import {
  Dropdown,
  Popover,
  Whisper,
  WhisperInstance,
  Stack,
  Badge,
  Avatar,
  IconButton,
  List,
  Button
} from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import GithubIcon from '@rsuite/icons/legacy/Github';
import {Icon} from "@rsuite/icons";
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';
import {useStores} from "@/hooks/useStores";
import AdminIcon from '@rsuite/icons/Admin';
import PeoplesIcon from '@rsuite/icons/Peoples';
import ListIcon from '@rsuite/icons/List';
import WechatOutlineIcon from '@rsuite/icons/WechatOutline';
import {observer} from "mobx-react-lite";

const renderAdminSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const handleSelect = eventKey => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as</p>
          <strong>Administrator</strong>
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Set status</Dropdown.Item>
        <Dropdown.Item>Profile & account</Dropdown.Item>
        <Dropdown.Item>Feedback</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        <Dropdown.Item
          icon={<HelpOutlineIcon />}
          href="https://rsuitejs.com"
          target="_blank"
          as="a"
        >
          Help{' '}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const renderNoticeSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const notifications = [
    [
      '7 hours ago',
      'The charts of the dashboard have been fully upgraded and are more visually pleasing.'
    ],
    [
      '13 hours ago',
      'The function of virtualizing large lists has been added, and the style of the list can be customized as required.'
    ],
    ['2 days ago', 'Upgraded React 18 and Webpack 5.'],
    [
      '3 days ago',
      'Upgraded React Suite 5 to support TypeScript, which is more concise and efficient.'
    ]
  ];

  return (
    <Popover ref={ref} className={className} style={{ left, top, width: 300 }} title="Last updates">
      <List>
        {notifications.map((item, index) => {
          const [time, content] = item;
          return (
            <List.Item key={index}>
              <Stack spacing={4}>
                <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
              </Stack>

              <p>{content}</p>
            </List.Item>
          );
        })}
      </List>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button onClick={onClose}>More notifications</Button>
      </div>
    </Popover>
  );
};

type ThemeType = 'dark' | 'light' | 'high-contrast';
interface HeaderProps {
    theme: ThemeType;
    onChangeTheme: (theme: ThemeType) => void;
}

const Header = observer((props : HeaderProps) => {
    const trigger = useRef<WhisperInstance>(null);

    const { theme, onChangeTheme } = props;

    const { textbookStore } = useStores();

    const { isOnCollaborativeMode } = textbookStore;

    function handleOnClickThreads() {
        if(textbookStore.sidebarState === 'threads') {
            textbookStore.setSidebarState('closed');
        } else {
            textbookStore.setSidebarState('threads');
        }
    }

    function handleOnClickChat() {
        if(textbookStore.sidebarState === 'chat') {
            textbookStore.setSidebarState('closed');
        } else {
            textbookStore.setSidebarState('chat');
        }
    }

    return (
        <Stack className="header" spacing={8}>
            {
                isOnCollaborativeMode && (
                    [
                    <IconButton
                        icon={
                            <Icon
                                as={ListIcon}
                                style={{ fontSize: 20 }}
                            />
                        }
                        onClick={handleOnClickThreads}
                    >
                        Threads
                    </IconButton>,
                        <IconButton
                            icon={ <Icon
                                    as={WechatOutlineIcon}
                                    style={{ fontSize: 20 }}/> }
                            onClick={handleOnClickChat}
                        />
                    ]
                )
            }

            <IconButton
                icon={
                    <Icon
                        as={isOnCollaborativeMode ? AdminIcon : PeoplesIcon}
                        style={{ fontSize: 20 }}
                    />
                }
                onClick={() => textbookStore.setCollaborativeMode(!isOnCollaborativeMode)}
            />
            <IconButton
                icon={
                    <Icon
                        as={theme === 'light' ? MdOutlineNightlight : MdOutlineLightMode}
                        style={{ fontSize: 20 }}
                    />
                }
                onClick={() => onChangeTheme(theme === 'dark' ? 'light' : 'dark')}
            />
          <IconButton
            icon={<GithubIcon style={{ fontSize: 20 }} />}
            href="https://github.com/MuriloCalegari/NewAPTWebsite"
            target="_blank"
          />

          <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderNoticeSpeaker}>
            <IconButton
              icon={
                <Badge content={5}>
                  <NoticeIcon style={{ fontSize: 20 }} />
                </Badge>
              }
            />
          </Whisper>

          <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderAdminSpeaker}>
            <Avatar
              size="sm"
              circle
              src="https://avatars.githubusercontent.com/u/1203827"
              alt="@simonguo"
              style={{ marginLeft: 8 }}
            />
          </Whisper>
        </Stack>
    );
});

export default Header;
