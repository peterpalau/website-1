import * as React from "react";
import { LocationLink } from "../../../routing/LocationLink";
import { LocationDescriptor } from "../../../routing/locations";
import { buttonBaseStyles, ColoredButtonStyle, DefaultButtonStyle } from "../styles";

interface Props {
  children?: React.ReactChild;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  height?: number;
  id?: string;
  location: LocationDescriptor;
}

export class ButtonLink extends React.Component<Props> {
  public render() {
    const { children, color, disabled = false, fullWidth, height, id, location } = this.props;
    const inner = { id: id, style: buttonBaseStyles, tabIndex: disabled ? -1 : 0, type: "button" };

    return (
      <LocationLink location={location} tabIndex={-1}>
        {color !== undefined ? (
          <ColoredButtonStyle color={color} disabled={disabled} inner={inner} fullWidth={fullWidth} height={height}>
            {children}
          </ColoredButtonStyle>
        ) : (
          <DefaultButtonStyle disabled={disabled} inner={inner} fullWidth={fullWidth} height={height}>
            {children}
          </DefaultButtonStyle>
        )}
      </LocationLink>
    );
  }
}