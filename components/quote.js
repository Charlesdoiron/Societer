import React from "react";
import { Quote } from "../styled/typos";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
const QuoteContainer = (props) => {
  if (props.isNextLink) {
    return (
      <Link
        href={props.target.replace(props.url, "")}
        as={props.target.replace(props.url, "")}
      >
        <Quote style={props.style}>
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
      </Link>
    );
  } else {
    return (
      <a href={props.target} target="_blank" rel="noreferrer noopener">
        <Quote style={props.style}>
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
      </a>
    );
  }
};
export default QuoteContainer;
