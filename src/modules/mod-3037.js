'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3037",
  name: "Replace \"J\" with \"z\"",
  description: "Replaces every J with z.",
  run: (value) => String(value).split("J").join("z"),
});
