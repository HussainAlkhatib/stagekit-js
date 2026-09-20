'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3977",
  name: "Replace \"Y\" with \"Z\"",
  description: "Replaces every Y with Z.",
  run: (value) => String(value).split("Y").join("Z"),
});
