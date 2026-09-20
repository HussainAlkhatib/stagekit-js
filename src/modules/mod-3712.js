'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3712",
  name: "Replace \"U\" with \"D\"",
  description: "Replaces every U with D.",
  run: (value) => String(value).split("U").join("D"),
});
