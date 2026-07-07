import axios from "axios";

class BSEProvider {
  constructor() {
    this.client = axios.create({
      timeout: 30000,
      headers: {
        "User-Agent": "Mozilla/5.0",
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

const bseProvider = new BSEProvider();

export default bseProvider;

