'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4401",
  name: "Replace \"5\" with \"V\"",
  description: "Replaces every 5 with V.",
  run: (value) => String(value).split("5").join("V"),
});
