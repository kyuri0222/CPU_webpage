import Editor from "../QuillEditor";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const NoticeCreate = ({ match }) => {
  const { team } = match.params;
  const [desc, setDesc] = useState("");
  function onEditorChange(value) {
    setDesc(value);
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
  }));
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [title, settitle] = useState();
  const onTitleChange = (e) => {
    settitle(e.target.value);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div>취업게시판</div>
            <TextField
              id="outlined-full-width"
              label="제목"
              placeholder="제목을 입력하세요"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={title}
              onChange={onTitleChange}
            />
            <Editor value={desc} onChange={onEditorChange} />
            <Button
              component={Link}
              to={"/Notice"}
              variant="contained"
              color="primary"
            >
              저장하기
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NoticeCreate;
