import { BASE_TEXT_VARIANTS } from "@/theme";

function lazyLoadImage(url: string, width?: number, height?: number) {
  return `<img src="${url}" alt="Image" loading="lazy" class="lazy-image" style="border-radius: 8px; ${
    width ? `width: ${width}px;` : ""
  } ${height ? `height: ${height}px;` : ""}" />`;
}

export function extractRichText(blocks: any[]): string[] {
  let lastHeading = "";
  let contentGroupHtml: string[] = [];
  let currentContent: string[] = [];
  let currentImages: string[] = [];
  let imagesAfterLastHeading: string[] = [];
  let isRowReverse = false;

  blocks.forEach((block, index) => {
    try {
      switch (block.type) {
        case "heading_1":
        case "heading_2":
        case "heading_3":
          lastHeading = processRichText(block[block.type].rich_text);
          const headingLevel = block.type.replace("heading_", "h");
          const headingStyle = getHeadingStyle(block.type);

          currentContent.push(
            `<${headingLevel} style="${headingStyle} margin: 0;">${lastHeading}</${headingLevel}>`
          );

          if (index === blocks.length - 1) {
            if (imagesAfterLastHeading.length > 0) {
              contentGroupHtml.push(buildImagesRowHtml(imagesAfterLastHeading));
            }
            contentGroupHtml.push(
              buildContentImageHtml(currentContent, currentImages, isRowReverse)
            );
            resetState();
          }
          break;

        case "paragraph":
          const paragraphText = processRichText(block.paragraph.rich_text);
          currentContent.push(
            `<p style="font-family: ${BASE_TEXT_VARIANTS.body.fontFamily}; font-size: ${BASE_TEXT_VARIANTS.body.fontSize}px; line-height: 1.5; margin: 0;">${paragraphText}</p>`
          );
          break;

        case "image":
          const imageUrl =
            block.image?.file?.url || block.image?.external?.url || "";
          if (imageUrl) {
            const lazyImageHtml = lazyLoadImage(imageUrl);
            if (index === blocks.length - 1) {
              imagesAfterLastHeading.push(lazyImageHtml);
            } else {
              currentImages.push(lazyImageHtml);
            }
          }
          break;

        case "embed":
        case "url":
          const embedUrl = block[block.type]?.url || "";
          if (embedUrl) {
            currentContent.push(
              `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer" style="margin-bottom: 14px; display: block; color: blue; text-decoration: underline;">${embedUrl}</a>`
            );
          }
          break;

        default:
          currentContent.push(
            `<p style='color: red;'>Unsupported block type: ${block.type}</p>`
          );
      }

      if (block.type === "image" || index === blocks.length - 1) {
        if (
          currentContent.length > 0 ||
          currentImages.length > 0 ||
          imagesAfterLastHeading.length > 0
        ) {
          contentGroupHtml.push(
            buildContentImageHtml(currentContent, currentImages, isRowReverse)
          );
          resetState();
        }
      }
    } catch (error) {
      console.error("Error processing block:", block, error);
      currentContent.push(
        "<p style='margin-bottom: 14px;'>Error processing block</p>"
      );
    }
  });

  return [
    `<div class="content-wrapper">${contentGroupHtml.join("")}</div>`,
    getStyles(),
  ];

  function resetState() {
    currentContent = [];
    currentImages = [];
    imagesAfterLastHeading = [];
    isRowReverse = !isRowReverse;
  }

  function getHeadingStyle(type: string): string {
    switch (type) {
      case "heading_1":
        return `font-size: ${BASE_TEXT_VARIANTS.heading.fontSize}px; font-family: ${BASE_TEXT_VARIANTS.heading.fontFamily};`;
      case "heading_2":
        return `font-size: ${BASE_TEXT_VARIANTS.subHeading.fontSize}px; font-family: ${BASE_TEXT_VARIANTS.subHeading.fontFamily};`;
      case "heading_3":
        return `font-size: ${BASE_TEXT_VARIANTS.subHeading.fontSize}px; font-family: ${BASE_TEXT_VARIANTS.subHeading.fontFamily};`;
      default:
        return "";
    }
  }
}

function buildContentImageHtml(
  content: string[],
  images: string[],
  isReversed: boolean
): string {
  return `<div class="content-images-container ${
    isReversed ? "row-reverse" : ""
  }">
            <div class="content">${content.join("")}</div>
            <div class="images">${images.join("")}</div>
          </div>`;
}

function buildImagesRowHtml(images: string[]): string {
  return `<div class="images-row">
            ${images.join("")}
          </div>`;
}

function processRichText(richTextArray: any[]): string {
  return richTextArray
    .map((text) => {
      if (text.type === "text") {
        const content = text.text.content;
        const annotations = text.annotations;
        let colorStyle = "";

        // Apply color if specified in annotations
        if (annotations.color && annotations.color !== "default") {
          colorStyle = `color: ${annotations.color};`;
        }

        const highlightedPattern = /(\*\*[^*]+\*\*)/g;
        const urlPattern = /(https?:\/\/[^\s]+)/g;

        const highlightedText = content.replace(
          highlightedPattern,
          (match: string) =>
            `<span style="color: orange; font-family: ${
              BASE_TEXT_VARIANTS.heading.fontFamily
            };">${match.replace(/\*\*/g, "")}</span>`
        );
        return highlightedText
          .replace(
            urlPattern,
            (url: string) =>
              `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${url}</a>`
          )
          .replace(
            content,
            `<span style="${colorStyle} font-family: ${BASE_TEXT_VARIANTS.body.fontFamily};">${content}</span>`
          );
      }
      return "";
    })
    .join(" ");
}

function getStyles(): string {
  return `<style>
    .lazy-image {
      margin-bottom: 10px;
      max-width: 100%;
      height: auto;
    }
    .images-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px; 
    }
    .images-row img {
      width: 500px;
      height: 500px; 
    }
    @media (max-width: 768px) {
      .content-images-container {
        display: flex;
        flex-direction: column;
        // gap: 40px;
      }
      .content, .images {
        width: 100%;
        margin: 20px 0;
      }
      .content {
        // border: 2px solid red;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;
      }
    }
    @media (min-width: 769px) {
      .content-images-container {
        display: flex;
        flex-direction: row;
        gap: 40px; 
      }
      .row-reverse {
        flex-direction: row-reverse;
      }
      .content, .images {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px; 
        margin-bottom: 50px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 50px;
    }
  </style>`;
}
