const express = require('express');
const router = express.Router();

/* POST contact info  
  * name
  * email
  * message
*/
router.post('/', async function(req, res, next) {
  try {
    const response = await fetch('https://formspree.io/mzbavqpp', {
      method: 'POST',
      body: req.body,
      headers: {
        'Accept': 'application/json'
      }
    })
  
    if (!response.ok) {
      throw new Error('Error sending contact info')
    }
  
    const data = await response.json()
  
    res.send(data)
  } catch (e) {
    next(e)
  }
});

module.exports = router; 