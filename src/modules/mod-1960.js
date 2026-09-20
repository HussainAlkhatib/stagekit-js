'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1960",
  name: "Replace \"r\" with \"V\"",
  description: "Replaces every r with V.",
  run: (value) => String(value).split("r").join("V"),
});
