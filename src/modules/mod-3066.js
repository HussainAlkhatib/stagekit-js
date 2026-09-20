'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3066",
  name: "Replace \"J\" with \"3\"",
  description: "Replaces every J with 3.",
  run: (value) => String(value).split("J").join("3"),
});
