'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2233",
  name: "Replace \"w\" with \"o\"",
  description: "Replaces every w with o.",
  run: (value) => String(value).split("w").join("o"),
});
