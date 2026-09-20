'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2878",
  name: "Replace \"G\" with \"Y\"",
  description: "Replaces every G with Y.",
  run: (value) => String(value).split("G").join("Y"),
});
