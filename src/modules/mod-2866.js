'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2866",
  name: "Replace \"G\" with \"M\"",
  description: "Replaces every G with M.",
  run: (value) => String(value).split("G").join("M"),
});
