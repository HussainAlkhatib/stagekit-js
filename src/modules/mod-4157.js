'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4157",
  name: "Replace \"1\" with \"V\"",
  description: "Replaces every 1 with V.",
  run: (value) => String(value).split("1").join("V"),
});
