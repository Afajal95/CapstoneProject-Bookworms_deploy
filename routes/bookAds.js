// init code
const express = require("express");
const router = express.Router();

const bookAdsControl = require("../controllers/bookAdsControl");

const upload = require("../middleware/upload");

// default route
router.all("/", bookAdsControl.default);

// posting ads route
router.post(
  "/postAds",
  upload.single("BookImages"),
  bookAdsControl.createBookAds
);

router.get("/allads", bookAdsControl.getBooks);

// route to find ads by category
router.get("/viewAds", bookAdsControl.getByCategory);

// route to search ads by title name
router.get("/searchAds", bookAdsControl.searchByTitle);

router.get("/books/:Title", bookAdsControl.searchBook);

// route to see my Ads
router.get("/myAds", bookAdsControl.myAds);

// route to delete ads
router.delete("/deleteAds", bookAdsControl.removeAds);

// exporting the router
module.exports = router;
