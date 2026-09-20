'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2848",
  name: "Replace \"G\" with \"t\"",
  description: "Replaces every G with t.",
  run: (value) => String(value).split("G").join("t"),
});
