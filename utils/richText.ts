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
            )}; padding-left: 10px; margin: 0; ; ">${lastHeading}</${headingLevel}>`
          );

          if (index === blocks.length - 1) {
            contentGroupHtml.push(
              `<div class="content-images-container ${
                isRowReverse ? "row-reverse" : ""
              }">
                <div class="content">
                  ${currentContent.join("")}
                </div>
                <div class="images">
                  ${currentImages.join("")}
                </div>
                ${
                  imagesAfterLastHeading.length > 0
                    ? `<div class="images-row">${imagesAfterLastHeading.join(
                        ""
                      )}</div>`
                    : ""
                }
              </div>`
            );
            currentContent = [];
            currentImages = [];
            imagesAfterLastHeading = [];
            isRowReverse = !isRowReverse;
          }
          break;

        case "paragraph":
          const paragraphText = processRichText(block.paragraph.rich_text);
          currentContent.push(
            `<p style="font-size: 18px; text-align: left; padding-left: 10px;  margin: 0; ">${paragraphText}</p>`
          );
          break;

        case "image":
          const imageUrl =
            block.image?.file?.url || block.image?.external?.url || "";
          const imageClass = getDynamicImageClass(lastHeading);

          if (imageUrl) {
            if (index === blocks.length - 1) {
              imagesAfterLastHeading.push(
                `<img src="${imageUrl}" alt="Image"  style="margin: 5px; max-width: 30%; height: auto; "/>`
              );
            } else {
              currentImages.push(
                `<img src="${imageUrl}" alt="Image"  style="margin-bottom: 10px; max-width: 100%; height: auto; "/>`
              );
            }
          }
          break;

        case "embed":
        case "url":
          const embedUrl = block[block.type]?.url || "";
          currentContent.push(
            embedUrl
              ? `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer" style="margin-bottom: 14px; display: block; color: blue; text-decoration: underline;">${embedUrl}</a>`
              : ""
          );
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
            `<div class="content-images-container ${
              isRowReverse ? "row-reverse" : ""
            }">
              <div class="content">
                ${currentContent.join("")}
              </div>
              <div class="images">
                ${currentImages.join("")}
              </div>
              ${
                imagesAfterLastHeading.length > 0
                  ? `<div class="images-row">${imagesAfterLastHeading.join(
                      ""
                    )}</div>`
                  : ""
              }
            </div>`
          );
          currentContent = [];
          currentImages = [];
          imagesAfterLastHeading = [];
          isRowReverse = !isRowReverse;
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
    `<div style="width: 100%;  ">${contentGroupHtml.join("")}</div>`,
    `<style>
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
          flex-direction: row;
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
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;

         
        }
      }
      .content {
      display: flex;
        flex-direction: column;
        gap: 15px;
      }
    </style>`,
  ];
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

function getDynamicImageClass(heading: string): string {
  switch (heading) {
    case "Technologies And Tools":
    case "Technical Expertise":
    case "Market Impact":
    case "Key Achievements":
    case "Non-Invasive Testing":
      return "responsive-image";
    default:
      return "responsive-image";
  }
}
