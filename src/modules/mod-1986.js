'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1986",
  name: "Replace \"s\" with \"l\"",
  description: "Replaces every s with l.",
  run: (value) => String(value).split("s").join("l"),
});
