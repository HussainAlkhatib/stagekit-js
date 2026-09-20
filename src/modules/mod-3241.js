'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3241",
  name: "Replace \"M\" with \"V\"",
  description: "Replaces every M with V.",
  run: (value) => String(value).split("M").join("V"),
});
