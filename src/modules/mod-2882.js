'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2882",
  name: "Replace \"G\" with \"2\"",
  description: "Replaces every G with 2.",
  run: (value) => String(value).split("G").join("2"),
});
