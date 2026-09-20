'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4182",
  name: "Replace \"2\" with \"l\"",
  description: "Replaces every 2 with l.",
  run: (value) => String(value).split("2").join("l"),
});
