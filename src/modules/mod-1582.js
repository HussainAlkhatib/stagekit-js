'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1582",
  name: "Replace \"l\" with \"J\"",
  description: "Replaces every l with J.",
  run: (value) => String(value).split("l").join("J"),
});
