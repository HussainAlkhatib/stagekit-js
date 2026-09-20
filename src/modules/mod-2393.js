'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2393",
  name: "Replace \"y\" with \"1\"",
  description: "Replaces every y with 1.",
  run: (value) => String(value).split("y").join("1"),
});
