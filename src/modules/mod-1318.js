'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1318",
  name: "Replace \"h\" with \"p\"",
  description: "Replaces every h with p.",
  run: (value) => String(value).split("h").join("p"),
});
