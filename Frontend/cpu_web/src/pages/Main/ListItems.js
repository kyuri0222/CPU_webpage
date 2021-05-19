import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import TocIcon from "@material-ui/icons/Toc";
import { Link } from "react-router-dom";
export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
      <ListItem button>
        <ListItemIcon>
          <TocIcon />
        </ListItemIcon>
        <ListItemText primary="메인페이지" />
      </ListItem>
    </Link>
    <Link
      to="/announce"
      style={{ textDecoration: "none", color: "black" }}
    >
      <ListItem button>
        <ListItemIcon>
          <TocIcon />
        </ListItemIcon>
        <ListItemText primary="공지사항" />
      </ListItem>
    </Link>
    <Link to="/welfare" style={{ textDecoration: "none", color: "black" }}>
      <ListItem button>
        <ListItemIcon>
          <BookmarksIcon />
        </ListItemIcon>
        <ListItemText primary="복지사업" />
      </ListItem>
    </Link>
    <Link
      to="/employee"
      style={{ textDecoration: "none", color: "black" }}
    >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="취업게시판" />
      </ListItem>
    </Link>
    <Link
      to="/free"
      style={{ textDecoration: "none", color: "black" }}
    >
      <ListItem button>
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary="자유게시판" />
      </ListItem>
    </Link>
    <Link to="/mypage" style={{ textDecoration: "none", color: "black" }}>
      <ListItem button>
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary="마이페이지" />
      </ListItem>
    </Link>
  </div>
);
