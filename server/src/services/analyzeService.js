import { analyzeUrl } from "../analyzers/urlAnalyzer.js";
import { analyzeMessage } from "../analyzers/messageAnalyzer.js";

export function analyzeUrlService(url) {
  return analyzeUrl(url);
}

export function analyzeMessageService(message) {
  return analyzeMessage(message);
}