'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3291",
  name: "Replace \"N\" with \"J\"",
  description: "Replaces every N with J.",
  run: (value) => String(value).split("N").join("J"),
});
