'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3063",
  name: "Replace \"J\" with \"0\"",
  description: "Replaces every J with 0.",
  run: (value) => String(value).split("J").join("0"),
});
