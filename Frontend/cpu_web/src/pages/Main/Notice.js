import React from "react";
import Board from "./Board";

const Notice = ({ match }) => {
  if (match.params.tab === "공지사항") return <Board title={"공지사항"} />;
  else if (match.params.tab === "취업게시판")
    return <Board title={"취업게시판"} />;
  else if (match.params.tab === "자유게시판")
    return <Board title={"자유게시판"} />;
};

export default Notice;
