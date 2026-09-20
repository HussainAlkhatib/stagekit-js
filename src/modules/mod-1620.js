'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1620",
  name: "Replace \"m\" with \"l\"",
  description: "Replaces every m with l.",
  run: (value) => String(value).split("m").join("l"),
});
