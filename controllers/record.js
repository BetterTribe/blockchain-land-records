"use strict";

var express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  ipfsAPI = require("ipfs-api"),
  Record = require("../models/record"),
  fs = require("fs");

var ipfs = ipfsAPI("localhost", "5001", { protocol: "http" });

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

exports.save_record = function(req, res) {
  console.log("save Record");
  var record = new Record({
    old_owner_name: req.body.old_owner_name,
    old_owner_unique_id: req.body.old_owner_unique_id,
    current_owner_name: req.body.current_owner_name,
    current_owner_unique_id: req.body.current_owner_unique_id,
    nonce: req.body.nonce,
    sell_price: req.body.sell_price,
    total_area: req.body.total_area
  });

  var content = JSON.stringify(record);
  console.log(content);

  fs.writeFile(
    `/tmp/${record.current_owner_unique_id}.json`,
    content,
    "utf8",
    err => {
      if (err) {
        return console.log("Error while sving file locally." + err);
      }
      console.log("The file was saved locally!");

      var data = [
        {
          path: `/tmp/${record.current_owner_unique_id}.json`,
          content: Buffer.from(content)
        }
      ];

      ipfs.add(data, (err, data) => {
        if (err) {
          return console.log("Error while saving file to ipfs." + err);
        }
        console.log("The file was saved to ipfs!");
        res.send(JSON.stringify(data[0].hash));
      });
    }
  );
};
