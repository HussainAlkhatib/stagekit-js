'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2844",
  name: "Replace \"G\" with \"p\"",
  description: "Replaces every G with p.",
  run: (value) => String(value).split("G").join("p"),
});
