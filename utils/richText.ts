
function lazyLoadImage(url: string) {
  return `<img src="${url}" alt="Image" loading="lazy" class="lazy-image" />`;
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

          currentContent.push(
            `<${headingLevel} style="font-size: ${getFontSizeForHeading(
              block.type
            )}; padding-left: 10px; margin: 0;">${lastHeading}</${headingLevel}>`
          );

          if (index === blocks.length - 1) {
            contentGroupHtml.push(
              buildContentImageHtml(currentContent, currentImages, imagesAfterLastHeading, isRowReverse)
            );
            resetState();
          }
          break;

        case "paragraph":
          const paragraphText = processRichText(block.paragraph.rich_text);
          currentContent.push(
            `<p style="font-size: 18px; text-align: left; padding-left: 10px; margin: 0;">${paragraphText}</p>`
          );
          break;

        case "image":
          const imageUrl = block.image?.file?.url || block.image?.external?.url || "";
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
        if (currentContent.length > 0 || currentImages.length > 0 || imagesAfterLastHeading.length > 0) {
          contentGroupHtml.push(
            buildContentImageHtml(currentContent, currentImages, imagesAfterLastHeading, isRowReverse)
          );
          resetState();
        }
      }
    } catch (error) {
      console.error("Error processing block:", block, error);
      currentContent.push("<p style='margin-bottom: 14px;'>Error processing block</p>");
    }
  });

  return [
    `<div class="content-wrapper">${contentGroupHtml.join("")}</div>`,
    getStyles()
  ];

  function resetState() {
    currentContent = [];
    currentImages = [];
    imagesAfterLastHeading = [];
    isRowReverse = !isRowReverse;
  }
}

// Helper function to build the HTML structure for content and images
function buildContentImageHtml(content: string[], images: string[], imagesAfter: string[], isReversed: boolean): string {
  return `<div class="content-images-container ${isReversed ? "row-reverse" : ""}">
            <div class="content">${content.join("")}</div>
            <div class="images">${images.join("")}</div>
            ${
              imagesAfter.length > 0
                ? `<div class="images-row">${imagesAfter.join("")}</div>`
                : ""
            }
          </div>`;
}

function getFontSizeForHeading(type: string): string {
  switch (type) {
    case "heading_1":
      return "35px";
    case "heading_2":
      return "25px";
    case "heading_3":
      return "20px";
    default:
      return "16px";
  }
}

function processRichText(richTextArray: any[]): string {
  return richTextArray
    .map((text) => {
      if (text.type === "text") {
        const content = text.text.content;
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return content.replace(
          urlPattern,
          (url: string) =>
            `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${url}</a>`
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
    @media (max-width: 768px) {
      .content-images-container {
        display: flex;
        flex-direction: column;
      }
      .content, .images {
        width: 100%;
        margin: 20px 0;
      }
      .images-row {
        display: flex;
        flex-wrap: wrap;
      }
    }
    @media (min-width: 769px) {
      .content-images-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
      .row-reverse {
        flex-direction: row-reverse;
      }
      .content, .images {
        width: 80%;
        margin: 20px 0;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  </style>`;
}


