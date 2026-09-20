'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1234",
  name: "Replace \"f\" with \"1\"",
  description: "Replaces every f with 1.",
  run: (value) => String(value).split("f").join("1"),
});
