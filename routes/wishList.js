// init code 
const express = require('express');
const router = express.Router();
 
const wishListControl = require('../controllers/wishListControl');

// default route
router.get('/', wishListControl.default);

// route to add to wishlist
router.post('/add-to-wishlist', wishListControl.addtoWishList);

// route to view your wishlist
router.get('/view', wishListControl.viewWishlist);


module.exports=router;