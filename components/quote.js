import React from "react";
import { Quote } from "../styled/typos";
import ReactMarkdown from "react-markdown";

const QuoteContainer = (props) => {
  return (
    <Quote style={props.style}>
      <a
        href={props.target}
        style={{ color: "inherit", textDecoration: "none", display: "flex" }}
      >
        <ReactMarkdown source={props.content} escapeHtml={false} />
      </a>
    </Quote>
  );
};
export default QuoteContainer;
