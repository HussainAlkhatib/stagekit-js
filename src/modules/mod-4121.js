'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4121",
  name: "Replace \"1\" with \"l\"",
  description: "Replaces every 1 with l.",
  run: (value) => String(value).split("1").join("l"),
});
