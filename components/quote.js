import React, { useState } from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { Quote } from "../styled/typos";
import ReactMarkdown from "react-markdown";

const QuoteContainer = (props) => {
  const config = { mass: 5, tension: 1000, friction: 500, duration: 600 };

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
