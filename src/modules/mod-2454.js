'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2454",
  name: "Replace \"z\" with \"1\"",
  description: "Replaces every z with 1.",
  run: (value) => String(value).split("z").join("1"),
});
