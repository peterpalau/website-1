import { Dropdown } from "@heydovetail/website/components/dropdown/Dropdown";
import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LinkList } from "@heydovetail/website/components/site/LinkList";
import { COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";

interface Props {
  onClose: () => void;
}

export class MobileMenu extends React.PureComponent<Props> {
  public render() {
    const { onClose } = this.props;

    return (
      <Dropdown>
        <Wrapper>
          <Flex gap={32} layout="column">
            <Item>
              <Flow>
                <Item>
                  <ButtonLink color={COLORS.purple} height={32} location={locations.signUp()} onClick={onClose}>
                    Try now
                  </ButtonLink>
                </Item>
                <Item>
                  <ButtonLink height={32} location={locations.logIn()} onClick={onClose}>
                    Log in
                  </ButtonLink>
                </Item>
              </Flow>
            </Item>
            <Item>
              <LinkList
                heading="Use cases"
                links={[
                  { label: "Feedback management", location: locations.feedbackManagement(), onClick: onClose },
                  { label: "Research repository", location: locations.researchRepository(), onClick: onClose },
                  { label: "Qualitative data analysis", location: locations.qualitativeDataAnalysis(), onClick: onClose },
                  { label: "Collaborative user research", location: locations.userResearch(), onClick: onClose }
                ]}
              />
            </Item>
            <Item>
              <HorizontalRule />
            </Item>
            <Item>
              <Flow gap={48}>
                <Item style={{ verticalAlign: "top" }}>
                  <LinkList
                    links={[
                      { label: "Pricing", location: locations.pricing(), onClick: onClose },
                      { label: "Support", location: locations.help(), onClick: onClose }
                    ]}
                  />
                </Item>
                <Item style={{ verticalAlign: "top" }}>
                  <LinkList
                    links={[
                      { label: "About", location: locations.about(), onClick: onClose },
                      { label: "Blog", location: locations.blog(), onClick: onClose }
                    ]}
                  />
                </Item>
              </Flow>
            </Item>
          </Flex>
        </Wrapper>
      </Dropdown>
    );
  }
}

const Wrapper = styled("div", {
  padding: "24px"
});

const HorizontalRule = styled("hr", {
  backgroundColor: COLORS.p08,
  border: 0,
  margin: "0",
  height: "2px"
});
