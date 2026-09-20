'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0570",
  name: "Replace \"b\" with \"J\"",
  description: "Replaces every b with J.",
  run: (value) => String(value).split("b").join("J"),
});
