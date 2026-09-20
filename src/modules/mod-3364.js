'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3364",
  name: "Replace \"O\" with \"W\"",
  description: "Replaces every O with W.",
  run: (value) => String(value).split("O").join("W"),
});
