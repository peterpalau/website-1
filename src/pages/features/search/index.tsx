import { Flex, Item } from "@heydovetail/ui-components";
import IllustrationSearchLarge from "@heydovetail/website/components/illustrations/IllustrationSearchLarge";
import { Center } from "@heydovetail/website/components/layout/Center";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { Features } from "@heydovetail/website/components/site/Features";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { HALF_GAP } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Search – Dovetail</title>
          <meta property="og:title" content="Search – Dovetail" />
          <meta
            property="og:description"
            content="Full-text search with querying means you can easily find research data, key quotes, and insights."
          />
          <meta
            name="description"
            content="Full-text search with querying means you can easily find research data, key quotes, and insights."
          />
        </Helmet>
        <DarkContainer>
          <Center>
            <Flex styled={{ gap: HALF_GAP / 2, layout: "column" }}>
              <Item>
                <HeroText
                  title="Search everywhere. Find anything."
                  text="Full-text search with querying means you can easily find research data, key quotes, and insights."
                />
              </Item>
              <Item>
                <IllustrationSearchLarge />
              </Item>
            </Flex>
          </Center>
          <Features
            features={[
              {
                text:
                  "Create views of your data that span projects. See all notes, tags, insights, or highlights from your entire team or company in a beautiful layout.",
                title: "Cross-project"
              },
              {
                text:
                  "Search within notes, tags, insights, and highlights. Find that key quote from a user testing session or quantify mentions of a specific word.",
                title: "Full-text"
              },
              {
                text:
                  "Start with fuzzy matching to search quickly then narrow your search with exact matching using quotes (“”) for fields like project and tag.",
                title: "Match types"
              },
              {
                text:
                  "Insert a minus (-) in to exclude results. For example, find mentions of the word ‘slow’ that aren’t already tagged with ‘performance’.",
                title: "Exclusions"
              }
            ]}
            large
          />
          <CenteredSignUp dark />
        </DarkContainer>
      </>
    );
  }
}
