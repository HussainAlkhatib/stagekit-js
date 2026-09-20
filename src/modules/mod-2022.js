'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2022",
  name: "Replace \"s\" with \"W\"",
  description: "Replaces every s with W.",
  run: (value) => String(value).split("s").join("W"),
});
