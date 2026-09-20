'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1595",
  name: "Replace \"l\" with \"W\"",
  description: "Replaces every l with W.",
  run: (value) => String(value).split("l").join("W"),
});
