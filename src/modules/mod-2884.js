'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2884",
  name: "Replace \"G\" with \"4\"",
  description: "Replaces every G with 4.",
  run: (value) => String(value).split("G").join("4"),
});
