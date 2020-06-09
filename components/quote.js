import React from "react";
import { Quote } from "../styled/typos";
import ReactMarkdown from "react-markdown";

const QuoteContainer = (props) => {
  return (
    <a
      href={props.target}
      style={{ color: "inherit", textDecoration: "none", display: "flex" }}
    >
      <Quote style={props.style}>
        <ReactMarkdown source={props.content} escapeHtml={false} />
      </Quote>
    </a>
  );
};
export default QuoteContainer;
