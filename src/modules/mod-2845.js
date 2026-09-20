'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2845",
  name: "Replace \"G\" with \"q\"",
  description: "Replaces every G with q.",
  run: (value) => String(value).split("G").join("q"),
});
