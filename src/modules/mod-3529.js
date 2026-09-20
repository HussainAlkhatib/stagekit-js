'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3529",
  name: "Replace \"R\" with \"D\"",
  description: "Replaces every R with D.",
  run: (value) => String(value).split("R").join("D"),
});
