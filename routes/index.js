var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Welcome to Jesse Thomas Hoffmann's portfolio" });
});

module.exports = router;
