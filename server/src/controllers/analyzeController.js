import {
  analyzeUrlService,
  analyzeMessageService
} from "../services/analyzeService.js";
export function analyzeUrl(req, res, next) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required."
      });
    }

    const result = analyzeUrlService(url);

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
}

export function analyzeMessage(req, res, next) {
  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required."
      });
    }

    const result = analyzeMessageService(message);

    return res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {

    next(error);

  }
}