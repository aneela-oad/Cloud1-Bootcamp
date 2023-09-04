const CUSTOM_PART = "--c";
const DOWNLOAD_PART =
  "https://www.youtube.com/watch?v=SO21BH6vTC4'";

// Returns either an empty string or the org's base video download url
export function getBaseVideoUrl(baseUrl) {
  if (baseUrl) {
    const domain = baseUrl.split(".")[0];
    return `${domain}${CUSTOM_PART}${DOWNLOAD_PART}`;
  }
  return "";
}