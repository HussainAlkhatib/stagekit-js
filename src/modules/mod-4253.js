'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4253",
  name: "Replace \"3\" with \"v\"",
  description: "Replaces every 3 with v.",
  run: (value) => String(value).split("3").join("v"),
});
