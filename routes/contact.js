const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

/* POST contact info
 * name
 * email
 * message
 */
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;
router.post("/", async function (req, res, next) {
  try {
    const { name, email, message } = req.body;
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("message", message);

    const { data } = await axios.post(FORMSPREE_ENDPOINT, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!data.ok) {
      throw new Error("Error sending contact info");
    }

    res.send(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
