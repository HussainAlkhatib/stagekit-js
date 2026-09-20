'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4347",
  name: "Replace \"4\" with \"2\"",
  description: "Replaces every 4 with 2.",
  run: (value) => String(value).split("4").join("2"),
});
