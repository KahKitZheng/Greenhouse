const express = require("express");
const https = require("https");
const router = express.Router();

router.get("/", (req, res, next) => {
  const request = https.request(
    "https://trefle.io/api/auth/claim?token=YTUzu0LZx31EGc-ut2XFy8pf-XTf_lDpizcGoa0mKxU&origin=http://localhost:3000",
    { method: "POST" },
    (response) => {
      response.on("data", (data) => {
        res.status(200).json({
          authToken: JSON.parse(data).token,
        });
      });
    }
  );

  request.end();
});

module.exports = router;
