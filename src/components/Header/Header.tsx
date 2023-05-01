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
import { useLocation } from 'react-router-dom';
import GithubIcon from '@rsuite/icons/legacy/Github';
import { Icon } from "@rsuite/icons";
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';
import { useStores } from "@/hooks/useStores";
import AdminIcon from '@rsuite/icons/Admin';
import PeoplesIcon from '@rsuite/icons/Peoples';
import ListIcon from '@rsuite/icons/List';
import WechatOutlineIcon from '@rsuite/icons/WechatOutline';
import { observer } from "mobx-react-lite";
import { UserAvatarsGroup } from "@/components/Textbook/UserAvatarsGroup";
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const renderAdminSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const handleSelect = eventKey => {
    onClose();
  };

  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as</p>
          <strong>Robert Duvall</strong>
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Set status</Dropdown.Item>
        <Dropdown.Item>Profile & account</Dropdown.Item>
        <Dropdown.Item>Feedback</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const renderNoticeSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const notifications = [
    [
      'Recently',
      'Added all new features for textbook'
    ],
    ['4 weeks ago', 'Added first textbook proof of concept.'],
    [
      '2 months ago',
      'We started the base website with the course APTs feature.'
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
  shouldDisplayCollaborativeTools?: boolean;
  isBookmarked?: boolean;
}

const Header = observer((props: HeaderProps) => {
  const trigger = useRef<WhisperInstance>(null);
  const location = useLocation();
  const { pathname } = location

  const {
    theme,
    onChangeTheme,
    shouldDisplayCollaborativeTools,
    isBookmarked
  } = props;

  const { textbookStore } = useStores();
  const { users, isOnCollaborativeMode, bookmarks } = textbookStore;

  const isContentPath = () => {
    const pathname = location.pathname
    const prefix = '/contents/page';
    return pathname.startsWith(prefix) && pathname.length > prefix.length;
  };

  function handleOnClickThreads() {
    if (textbookStore.sidebarState === 'threads') {
      textbookStore.setSidebarState('closed');
    } else {
      textbookStore.setSidebarState('threads');
    }
  }

  function handleOnClickChat() {
    if (textbookStore.sidebarState === 'chat') {
      textbookStore.setSidebarState('closed');
    } else {
      textbookStore.setSidebarState('chat');
    }
  }

  return (
    <Stack className="header" spacing={8}>
      {
        shouldDisplayCollaborativeTools && isOnCollaborativeMode && (
          [
            <UserAvatarsGroup users={users} maxUsersToDisplay={5} />,
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
              icon={<Icon
                as={WechatOutlineIcon}
                style={{ fontSize: 20 }} />}
              onClick={handleOnClickChat}
            />
          ]
        )
      }

      {shouldDisplayCollaborativeTools &&
        <IconButton
          icon={
            <Icon
              as={isOnCollaborativeMode ? AdminIcon : PeoplesIcon}
              style={{ fontSize: 20 }}
            />
          }
          onClick={() => textbookStore.setCollaborativeMode(!isOnCollaborativeMode)}
        />
      }
      <IconButton
        icon={
          <Icon
            as={theme === 'light' ? MdOutlineNightlight : MdOutlineLightMode}
            style={{ fontSize: 20 }}
          />
        }
        onClick={() => onChangeTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      {isContentPath() && (<IconButton
        icon={
          <Icon
            as={bookmarks.some(bookmark => bookmark === pathname) ? BsBookmarkFill : BsBookmark}
            style={{ fontSize: 20 }}
          />
        }
        onClick={() => textbookStore.setBookmark(pathname)}
      />)}

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
          src={theme !== "dark" ? "https://users.cs.duke.edu/~rcd/images/rcd.jpg" : "https://users.cs.duke.edu/~rcd/images/rcd_old.gif"}
          alt="@simonguo"
          style={{ marginLeft: 8 }}
          imgProps={{style: {objectFit: "cover"}}}
        />
      </Whisper>
    </Stack>
  );
});

export default Header;
