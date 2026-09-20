'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3958",
  name: "Replace \"Y\" with \"F\"",
  description: "Replaces every Y with F.",
  run: (value) => String(value).split("Y").join("F"),
});
