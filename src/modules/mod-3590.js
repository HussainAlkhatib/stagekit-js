'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3590",
  name: "Replace \"S\" with \"D\"",
  description: "Replaces every S with D.",
  run: (value) => String(value).split("S").join("D"),
});
