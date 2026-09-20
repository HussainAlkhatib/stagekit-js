'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2797",
  name: "Replace \"F\" with \"D\"",
  description: "Replaces every F with D.",
  run: (value) => String(value).split("F").join("D"),
});
