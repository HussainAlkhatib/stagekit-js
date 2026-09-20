'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1487",
  name: "Replace \"k\" with \"a\"",
  description: "Replaces every k with a.",
  run: (value) => String(value).split("k").join("a"),
});
