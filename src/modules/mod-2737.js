'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2737",
  name: "Replace \"E\" with \"F\"",
  description: "Replaces every E with F.",
  run: (value) => String(value).split("E").join("F"),
});
