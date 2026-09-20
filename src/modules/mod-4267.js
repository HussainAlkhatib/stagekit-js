'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4267",
  name: "Replace \"3\" with \"J\"",
  description: "Replaces every 3 with J.",
  run: (value) => String(value).split("3").join("J"),
});
