var express = require("express");
var router = express.Router();

var recordController = require("../controllers/record");

router.post("/saveRecord", (req, res) => recordController.save_record);

router.post("/publishContract", (req, res) => recordController.publish_record);

module.exports = router;
