
export function extractRichText(blocks: any[]): string[] {
    return blocks.map((block) => {
      try {
        switch (block.type) {
          case "heading_1":
            return `<h1 style="margin-bottom: 20px; font-size: 28px;">${processRichText(block.heading_1.rich_text)}</h1>`;
          case "heading_2":
            return `<h2 style="margin-bottom: 18px; font-size: 24px; font-weight: bold;">${processRichText(block.heading_2.rich_text)}</h2>`;
          case "heading_3":
            return `<h3 style="margin-bottom: 16px; font-size: 20px; font-weight: bold;">${processRichText(block.heading_3.rich_text)}</h3>`;
          case "paragraph":
            return `<p style="margin-bottom: 14px; font-size: 16px;">${processRichText(block.paragraph.rich_text)}</p>`;
          case "image":
            const imageUrl = block.image?.file?.url || block.image?.external?.url || "";
            return imageUrl
              ? `<img src="${imageUrl}" alt="Image" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 20px; border-radius: 20px;" />`
              : "";
          case "embed":
          case "url":
            const embedUrl = block[block.type]?.url || "";
            return embedUrl
              ? `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer" style="margin-bottom: 14px; display: block; color: blue; text-decoration: underline;">${embedUrl}</a>`
              : "";
          default:
            return "<p style='margin-bottom: 14px;'>Unsupported block type</p>";
        }
      } catch (error) {
        console.error("Error processing block:", block, error);
        return "<p style='margin-bottom: 14px;'>Error processing block</p>";
      }
    });
  }
  
  function processRichText(richTextArray: any[]): string {
    return richTextArray
      .map((text) => {
        if (text.type === "text") {
          const content = text.text.content;
          const urlPattern = /(https?:\/\/[^\s]+)/g;
          const processedContent = content.replace(
            urlPattern,
            (url: string) =>
              `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${url}</a>`
          );
  
          return processedContent;
        }
        return "";
      })
      .join(" ");
  }
  