'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1308",
  name: "Replace \"h\" with \"e\"",
  description: "Replaces every h with e.",
  run: (value) => String(value).split("h").join("e"),
});
