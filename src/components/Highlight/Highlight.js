import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default ({ code, language }) => {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{style}}>
          {tokens.map((line, i) => (
            <code key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </code>
          ))}
        </pre>
      )}
    </Highlight>
  )
};

/*
export default ({ children: { props: { children, className } } }) => {
  const language = className.replace(/language-/, "");
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{style}}>
          {tokens.map((line, i) => (
            <code key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </code>
          ))}
        </pre>
      )}
    </Highlight>
  )
};
*/