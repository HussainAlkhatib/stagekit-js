'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3125",
  name: "Replace \"K\" with \"1\"",
  description: "Replaces every K with 1.",
  run: (value) => String(value).split("K").join("1"),
});
