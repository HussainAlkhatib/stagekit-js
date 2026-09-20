'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1350",
  name: "Replace \"h\" with \"V\"",
  description: "Replaces every h with V.",
  run: (value) => String(value).split("h").join("V"),
});
