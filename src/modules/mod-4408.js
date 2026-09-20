'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4408",
  name: "Replace \"5\" with \"2\"",
  description: "Replaces every 5 with 2.",
  run: (value) => String(value).split("5").join("2"),
});
