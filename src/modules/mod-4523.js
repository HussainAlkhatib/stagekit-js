'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4523",
  name: "Replace \"7\" with \"V\"",
  description: "Replaces every 7 with V.",
  run: (value) => String(value).split("7").join("V"),
});
