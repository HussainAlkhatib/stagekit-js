'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3919",
  name: "Replace \"X\" with \"2\"",
  description: "Replaces every X with 2.",
  run: (value) => String(value).split("X").join("2"),
});
