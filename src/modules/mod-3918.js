'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3918",
  name: "Replace \"X\" with \"1\"",
  description: "Replaces every X with 1.",
  run: (value) => String(value).split("X").join("1"),
});
