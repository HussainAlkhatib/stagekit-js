'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2859",
  name: "Replace \"G\" with \"E\"",
  description: "Replaces every G with E.",
  run: (value) => String(value).split("G").join("E"),
});
