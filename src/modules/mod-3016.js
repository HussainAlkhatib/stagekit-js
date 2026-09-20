'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3016",
  name: "Replace \"J\" with \"e\"",
  description: "Replaces every J with e.",
  run: (value) => String(value).split("J").join("e"),
});
