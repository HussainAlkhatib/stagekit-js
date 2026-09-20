'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1704",
  name: "Replace \"n\" with \"J\"",
  description: "Replaces every n with J.",
  run: (value) => String(value).split("n").join("J"),
});
