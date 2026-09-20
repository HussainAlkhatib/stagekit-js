'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2851",
  name: "Replace \"G\" with \"w\"",
  description: "Replaces every G with w.",
  run: (value) => String(value).split("G").join("w"),
});
