import { Flex, Item } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import React from "react";
import { Helmet } from "react-helmet";
import { Masonry, MasonryItem } from "react-masonry-responsive";

interface Props {
  items: MasonryItem[];
  text: string;
  title: string;
}

export class DocumentIndex extends React.PureComponent<Props> {
  public render() {
    const { items, text, title } = this.props;

    return (
      <PageLayout>
        <Helmet>
          <title>{title} – Dovetail</title>
          <meta name="description" content={text} />
          <meta property="og:description" content={text} />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: 48, layout: "column" }}>
            <Item>
              <Hero center title={title} subtitle={text} />
            </Item>
            <Item>
              <Masonry containerWidth={WIDTH} gap={32} items={items} minColumnWidth={304} />
            </Item>
          </Flex>
        </Container>
      </PageLayout>
    );
  }
}
