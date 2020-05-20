import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="sam"
        timeAgo="Today at 4:45PM"
        text="I rock!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Jeff"
        timeAgo="Today at 1:00AM"
        text="I found the meal to be a bit pedantic"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Liz"
        timeAgo="Tuesday at 5:30PM"
        text="COVID-19 has ruined my life!"
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
