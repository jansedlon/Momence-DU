import { forwardRef, PropsWithChildren, useMemo } from "react";
import styled from "styled-components";

type DecorationProps = {
  // Bold
  b?: boolean;
  // Italic
  i?: boolean;
  // Underline
  u?: boolean;
  // Strikethrough
  s?: boolean;
};

// Union of allowed elements
type AllowedElements = "h1" | "h2" | "h3" | "h4" | "span" | "p";

// Utility type to make a single element optional boolean and the other "never" to prevent them from being used.
type NeverElementsExcept<Allowed extends AllowedElements> = {
  [key in Allowed]: boolean;
} & {
  [key in Exclude<AllowedElements, Allowed>]?: never;
};

type TagProps =
  | NeverElementsExcept<"h1">
  | NeverElementsExcept<"h2">
  | NeverElementsExcept<"h3">
  | NeverElementsExcept<"h4">
  | NeverElementsExcept<"span">
  | NeverElementsExcept<"p">;

type RefTypes = HTMLHeadingElement | HTMLSpanElement | HTMLParagraphElement;

type TextColor = "primary" | "secondary" | "black" | "white";

type CommonProps = {
  color?: TextColor;
  size?: number | string;
};

type ElementMap = { [key in keyof JSX.IntrinsicElements]?: boolean };

type Props = DecorationProps & TagProps & CommonProps;

const StyledText = styled.p<Required<CommonProps> & DecorationProps>`
  color: ${({ color, theme }) => theme.colors[color] ?? color};
  font-size: ${({ size }) => size};
  font-weight: ${({ b }) => (b ? "bold" : "normal")};
  font-style: ${({ i }) => (i ? "italic" : "normal")};
  text-decoration: ${({ u, s }) =>
    u || s ? `${u ? "underline" : ""}${s ? " line-through" : ""}` : "none"};
`;

export const Text = forwardRef<RefTypes, PropsWithChildren<Props>>(
  ({ h1, h2, h3, h4, span, p, color = "black", size, ...otherProps }, ref) => {
    const elements: ElementMap = { h1, h2, h3, h4 };
    const inlineElements: ElementMap = { span, p };

    const selectedElement = (Object.keys(elements) as AllowedElements[]).find(
      (name) => !!elements[name]
    );
    const selectedInlineElement = (
      Object.keys(inlineElements) as AllowedElements[]
    ).find((name) => !!inlineElements[name]);

    const tag = useMemo(
      () => selectedElement || selectedInlineElement || "p",
      [selectedElement, selectedInlineElement]
    );

    const fontSize = useMemo(() => {
      if (!size) return "inherit";
      if (typeof size === "number") return `${size}px`;

      return size;
    }, [size]);

    return (
      <StyledText
        as={tag}
        ref={ref}
        color={color}
        size={fontSize}
        {...otherProps}
      />
    );
  }
);

Text.displayName = "Text";
