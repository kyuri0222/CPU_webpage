import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Mypage = () => {
const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
        <Card className={classes.root}>
        <CardContent>
        <Typography variant="h5" component="h2">
            마이페이지
        </Typography>
        </CardContent>
    </Card>
    <br />
    <Card className={classes.root}>

        <CardMedia
          className={classes.media}
          image="https://blog.kakaocdn.net/dn/0Goax/btqBWBR99nh/7QikF7IKRyPx57hP78x3Wk/img.jpg"
          title="My Image"
        />


        <CardContent>
        <Typography variant="h5" component="h2">
            서강준
        </Typography>
        <Typography variant="body2" component="p">
            <br />
            학번  :  60181628
            <br />
            학년  :  3학년
            <br />
            전공  :  데이터테크놀로지
        </Typography>
        </CardContent>
    </Card>
    <br />
    <Card className={classes.root}>
        <CardContent>
        <Typography variant="body2" component="p">
            복지 현황
        </Typography>
        </CardContent>
    </Card>
    </div>
  );
};

export default Mypage;


