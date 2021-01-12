import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import TocIcon from '@material-ui/icons/Toc';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <TocIcon />
      </ListItemIcon>
      <ListItemText primary="공지사항" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BookmarksIcon />
      </ListItemIcon>
      <ListItemText primary="복지사업" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="취업 게시판" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <QuestionAnswerIcon />
      </ListItemIcon>
      <ListItemText primary="자유게시판" />
    </ListItem>
  </div>
);