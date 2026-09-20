'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3040",
  name: "Replace \"J\" with \"C\"",
  description: "Replaces every J with C.",
  run: (value) => String(value).split("J").join("C"),
});
