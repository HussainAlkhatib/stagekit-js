'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2172",
  name: "Replace \"v\" with \"o\"",
  description: "Replaces every v with o.",
  run: (value) => String(value).split("v").join("o"),
});
