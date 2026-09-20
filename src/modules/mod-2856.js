'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2856",
  name: "Replace \"G\" with \"B\"",
  description: "Replaces every G with B.",
  run: (value) => String(value).split("G").join("B"),
});
