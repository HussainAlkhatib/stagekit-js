'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3065",
  name: "Replace \"J\" with \"2\"",
  description: "Replaces every J with 2.",
  run: (value) => String(value).split("J").join("2"),
});
