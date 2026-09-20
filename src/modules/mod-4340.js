'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4340",
  name: "Replace \"4\" with \"V\"",
  description: "Replaces every 4 with V.",
  run: (value) => String(value).split("4").join("V"),
});
