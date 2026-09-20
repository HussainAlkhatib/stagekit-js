'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3618",
  name: "Replace \"S\" with \"6\"",
  description: "Replaces every S with 6.",
  run: (value) => String(value).split("S").join("6"),
});
