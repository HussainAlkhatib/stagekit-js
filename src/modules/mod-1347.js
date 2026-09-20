'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1347",
  name: "Replace \"h\" with \"S\"",
  description: "Replaces every h with S.",
  run: (value) => String(value).split("h").join("S"),
});
