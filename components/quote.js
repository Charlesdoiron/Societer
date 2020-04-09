import React from "react";
import { Quote } from "../styled/typos";
import ReactMarkdown from "react-markdown";

const QuoteContainer = (props) => {
  return (
    <Quote>
      <ReactMarkdown
        source={props.content}
        renderers={{
          link: (props) => (
            <a href={props.href} target="_blank">
              {props.children}
            </a>
          ),
        }}
        escapeHtml={false}
      />
    </Quote>
  );
};
export default QuoteContainer;
