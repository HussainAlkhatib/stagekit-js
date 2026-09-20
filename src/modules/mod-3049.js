'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3049",
  name: "Replace \"J\" with \"M\"",
  description: "Replaces every J with M.",
  run: (value) => String(value).split("J").join("M"),
});
