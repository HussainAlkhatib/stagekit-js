'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3668",
  name: "Replace \"T\" with \"V\"",
  description: "Replaces every T with V.",
  run: (value) => String(value).split("T").join("V"),
});
