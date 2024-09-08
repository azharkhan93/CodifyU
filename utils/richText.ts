


export function extractRichText(blocks: any[]): string[] {
  let lastHeading = "";
  let images: string[] = [];

  return blocks
    .map((block) => {
      try {
        switch (block.type) {
          case "heading_1":
            lastHeading = processRichText(block.heading_1.rich_text);
            console.log("Heading 1 captured:", lastHeading);
            return `<h1 style="font-size: 28px; padding-left: 20px;">${lastHeading}</h1>`;
          case "heading_2":
            lastHeading = processRichText(block.heading_2.rich_text);
            console.log("Heading 2 captured:", lastHeading);
            return `<h2 style="font-size: 24px; font-weight: bold; padding-left: 20px;">${lastHeading}</h2>`;
          case "heading_3":
            lastHeading = processRichText(block.heading_3.rich_text);
            console.log("Heading 3 captured:", lastHeading);
            return `<h3 style="font-size: 20px; font-weight: bold; padding-left: 20px;">${lastHeading}</h3>`;
          case "paragraph":
            const paragraphText = processRichText(block.paragraph.rich_text);
            return paragraphText
              ? `<p style="font-size: 18px; text-align: center; padding-left: 10px; padding-right: 10px; font-family: 'QuicksandSemiBold', sans-serif;">${paragraphText}</p>`
              : '';
          case "image":
            const imageUrl = block.image?.file?.url || block.image?.external?.url || "";
           

            const imageClass = lastHeading === "Technologies And Tools" ? "responsive-image2" : "responsive-image";

            if (lastHeading === "Technical Expertise" || lastHeading === "Market Impact") {
              return imageUrl
                ? `<div style="text-align: center; padding-top: 30px; padding-bottom: 20px;"><img src="${imageUrl}" alt="Image" class="${imageClass}"  /></div>`
                : "";
            }
            
            if (lastHeading === "Technologies And Tools") {
              if (imageUrl) {
                images.push(
                  `<img src="${imageUrl}" alt="Image" class="${imageClass}" " />`
                );
              }
              return "";
            } else if (lastHeading === "Key Achievements" || lastHeading === "Non-Invasive Testing") {
              return imageUrl
                ? `<div style="text-align: center; padding-top: 30px; padding-bottom: 20px;"><img src="${imageUrl}" alt="Image" class="${imageClass}"   margin-bottom: 10px;" /></div>`
                : "";
            } else {
              return imageUrl
                ? `<img src="${imageUrl}" alt="Image"  margin-bottom: 10px;" />`
                : "";
            }
          case "embed":
          case "url":
            const embedUrl = block[block.type]?.url || "";
            return embedUrl
              ? `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer" style="margin-bottom: 14px; display: block; color: blue; text-decoration: underline;">${embedUrl}</a>`
              : "";
          default:
            return `<p style='color: red;'>Unsupported block type: ${block.type}</p>`;
        }
      } catch (error) {
        console.error("Error processing block:", block, error);
        return "<p style='margin-bottom: 14px;'>Error processing block</p>";
      }
    })
    .concat(
      images.length > 0
        ? `<div style="padding: 30px 0px; display: flex; justify-content: center;  flex-wrap: wrap; gap: 20px;" class="responsive-image2; width: 900px;">${images.join('')}</div>`
        : []
    );
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












  