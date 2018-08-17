import React from "react";

// https://github.com/nfl/react-helmet/issues/79#issuecomment-299888528
// require("react-helmet/lib/HelmetConstants.js").HELMET_ATTRIBUTE = "data-react";

// Load production style
let styles: string;
if (process.env.NODE_ENV === "production") {
  try {
    styles = require("!raw-loader!../public/styles.css");
  } catch (err) {
    console.log(err);
  }
}

interface Props {
  body: string;
  headComponents: React.ReactNode;
  postBodyComponents: React.ReactNode;
}

class Html extends React.PureComponent<Props> {
  public render() {
    const css =
      process.env.NODE_ENV === `production` ? (
        <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />
      ) : null;

    const { body, headComponents, postBodyComponents } = this.props;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          {headComponents}
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = Html;
