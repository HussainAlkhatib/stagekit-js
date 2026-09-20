'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1235",
  name: "Replace \"f\" with \"2\"",
  description: "Replaces every f with 2.",
  run: (value) => String(value).split("f").join("2"),
});
