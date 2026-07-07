import axios from "axios";

class NSEProvider {
  constructor() {
    this.client = axios.create({
      timeout: 30000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "*/*",
        Referer: "https://www.nseindia.com/",
      },
    });
  }

  async download(url) {
    const { data } = await this.client.get(url, {
      responseType: "arraybuffer",
    });

    return data;
  }
}

const nseProvider = new NSEProvider();

export default nseProvider;
