'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3657",
  name: "Replace \"T\" with \"J\"",
  description: "Replaces every T with J.",
  run: (value) => String(value).split("T").join("J"),
});
