'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4243",
  name: "Replace \"3\" with \"l\"",
  description: "Replaces every 3 with l.",
  run: (value) => String(value).split("3").join("l"),
});
