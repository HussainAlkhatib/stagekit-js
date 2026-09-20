'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1363",
  name: "Replace \"h\" with \"8\"",
  description: "Replaces every h with 8.",
  run: (value) => String(value).split("h").join("8"),
});
