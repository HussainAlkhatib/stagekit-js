'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2924",
  name: "Replace \"H\" with \"J\"",
  description: "Replaces every H with J.",
  run: (value) => String(value).split("H").join("J"),
});
