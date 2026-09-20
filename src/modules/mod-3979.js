'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3979",
  name: "Replace \"Y\" with \"1\"",
  description: "Replaces every Y with 1.",
  run: (value) => String(value).split("Y").join("1"),
});
