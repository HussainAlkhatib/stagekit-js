'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4096",
  name: "Replace \"0\" with \"V\"",
  description: "Replaces every 0 with V.",
  run: (value) => String(value).split("0").join("V"),
});
