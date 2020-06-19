const express = require("express");

const {
  getcustomerItems,
  // getShopCollection,
  // getShopItemByItemId,
} = require("../controllers/customerItem");

const router = express.Router();

router.get("/", getcustomerItems);
// router.get("/:collection", getShopCollection);
// router.get("/detail/:itemId", getShopItemByItemId);

module.exports = router;
