'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3640",
  name: "Replace \"T\" with \"s\"",
  description: "Replaces every T with s.",
  run: (value) => String(value).split("T").join("s"),
});
