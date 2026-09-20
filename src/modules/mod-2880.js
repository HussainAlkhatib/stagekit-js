'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2880",
  name: "Replace \"G\" with \"0\"",
  description: "Replaces every G with 0.",
  run: (value) => String(value).split("G").join("0"),
});
