'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3021",
  name: "Replace \"J\" with \"j\"",
  description: "Replaces every J with j.",
  run: (value) => String(value).split("J").join("j"),
});
