'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2835",
  name: "Replace \"G\" with \"g\"",
  description: "Replaces every G with g.",
  run: (value) => String(value).split("G").join("g"),
});
