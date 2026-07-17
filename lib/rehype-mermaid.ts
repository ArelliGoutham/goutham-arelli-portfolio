import type { Plugin } from "unified";
import type { Root, Element, Text } from "hast";
import { visit } from "unist-util-visit";

/** Converts ```mermaid fenced blocks into <div data-mermaid="base64"> elements.
 *  Must run BEFORE rehype-pretty-code so the code block isn't syntax-highlighted. */
export const rehypeMermaid: Plugin<[], Root> = () => (tree) => {
  visit(tree, "element", (node: Element, index, parent) => {
    if (
      node.tagName !== "pre" ||
      node.children.length !== 1 ||
      (node.children[0] as Element).tagName !== "code"
    )
      return;

    const code = node.children[0] as Element;
    const classes = (code.properties?.className as string[]) ?? [];
    if (!classes.includes("language-mermaid")) return;

    const text = code.children
      .filter((c): c is Text => c.type === "text")
      .map((c) => c.value)
      .join("");

    // Encode as base64 so special chars don't break the data attribute
    const encoded = Buffer.from(text.trim(), "utf8").toString("base64");

    parent!.children[index!] = {
      type: "element",
      tagName: "div",
      properties: { "data-mermaid": encoded },
      children: [],
    };
  });
};
