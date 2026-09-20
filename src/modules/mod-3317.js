'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3317",
  name: "Replace \"O\" with \"a\"",
  description: "Replaces every O with a.",
  run: (value) => String(value).split("O").join("a"),
});
