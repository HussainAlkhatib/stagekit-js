'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3375",
  name: "Replace \"O\" with \"7\"",
  description: "Replaces every O with 7.",
  run: (value) => String(value).split("O").join("7"),
});
