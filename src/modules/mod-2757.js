'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2757",
  name: "Replace \"E\" with \"Z\"",
  description: "Replaces every E with Z.",
  run: (value) => String(value).split("E").join("Z"),
});
