'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1356",
  name: "Replace \"h\" with \"1\"",
  description: "Replaces every h with 1.",
  run: (value) => String(value).split("h").join("1"),
});
