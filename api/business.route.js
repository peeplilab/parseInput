const express = require('express');
const businessRoutes = express.Router();

businessRoutes.route('/add')
  .post(function (req, res) {
    let business = req.body;
    res.status(200).json({business});
    console.log('server');
    

    // business.save()
    //   .then(business => {
    //     res.status(200).json({'business': 'business in added successfully'});
    //   })
    //   .catch(err => {
    //   res.status(400).send("unable to save to database");
    //   });
  });

businessRoutes.route('/').get(function (req, res) {
  Business.find(function (err, businesses) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

module.exports = businessRoutes;
