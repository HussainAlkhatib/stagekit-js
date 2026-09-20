'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4645",
  name: "Replace \"9\" with \"V\"",
  description: "Replaces every 9 with V.",
  run: (value) => String(value).split("9").join("V"),
});
