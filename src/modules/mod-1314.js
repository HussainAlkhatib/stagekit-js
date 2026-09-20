'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1314",
  name: "Replace \"h\" with \"l\"",
  description: "Replaces every h with l.",
  run: (value) => String(value).split("h").join("l"),
});
