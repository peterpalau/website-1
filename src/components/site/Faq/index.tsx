import { Flex, Item } from "@heydovetail/ui-components";
import { LocationLink } from "@heydovetail/ui-components";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import React from "react";

interface Props {
  answer: string;
  linkText?: string;
  location?: LocationDescriptor;
  question: string;
}

export class Faq extends React.PureComponent<Props> {
  public render() {
    const { answer, linkText = "Learn more →", location, question } = this.props;

    return (
      <Flex styled={{ gap: 8, layout: "column" }}>
        <Item>
          <h4>{question}</h4>
        </Item>
        <Item>
          <p>
            <span style={{ opacity: LIGHT_TEXT_OPACITY }}>{answer}</span>
            {location !== undefined ? (
              <>
                {" "}
                <LocationLink location={location} presentation="text">
                  {linkText}
                </LocationLink>
              </>
            ) : null}
          </p>
        </Item>
      </Flex>
    );
  }
}
