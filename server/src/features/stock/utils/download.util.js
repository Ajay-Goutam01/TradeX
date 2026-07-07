import axios from "axios";

const DEFAULT_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  Connection: "keep-alive",
};

export async function downloadFile(url, options = {}) {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
    headers: {
      ...DEFAULT_HEADERS,
      ...options.headers,
    },
    timeout: 30000,
    maxRedirects: 5,
  });

  return response.data;
}