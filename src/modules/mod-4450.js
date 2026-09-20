'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4450",
  name: "Replace \"6\" with \"J\"",
  description: "Replaces every 6 with J.",
  run: (value) => String(value).split("6").join("J"),
});
