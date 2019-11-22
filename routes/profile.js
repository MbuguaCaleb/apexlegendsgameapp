const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//profile route
router.get("/:platform/:gamertarg", async (req, res) => {
  try {
    //API key should be sent in the headers when using the tracker API!
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY
    };

    //desctructuring request params
    const { platform, gamertarg } = req.params;

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertarg}`,
      {
        headers
      }
    );

    //convering the response data to Json
    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: "Profile Not Found!"
      });
    }

    res.json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error!"
    });
  }
});

module.exports = router;
