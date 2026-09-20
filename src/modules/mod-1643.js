'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1643",
  name: "Replace \"m\" with \"J\"",
  description: "Replaces every m with J.",
  run: (value) => String(value).split("m").join("J"),
});
