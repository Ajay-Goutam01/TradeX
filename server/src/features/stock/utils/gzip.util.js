import zlib from "zlib";

export function extractGzip(buffer) {
  return zlib.gunzipSync(buffer);
}