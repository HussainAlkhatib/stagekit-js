'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3843",
  name: "Replace \"W\" with \"M\"",
  description: "Replaces every W with M.",
  run: (value) => String(value).split("W").join("M"),
});
