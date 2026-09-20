'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2857",
  name: "Replace \"G\" with \"C\"",
  description: "Replaces every G with C.",
  run: (value) => String(value).split("G").join("C"),
});
