'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1351",
  name: "Replace \"h\" with \"W\"",
  description: "Replaces every h with W.",
  run: (value) => String(value).split("h").join("W"),
});
