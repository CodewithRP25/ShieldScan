import { getServerStatus } from "../services/healthService.js";

export function getHealth(_req, res) {
  res.status(200).json(getServerStatus());
}
