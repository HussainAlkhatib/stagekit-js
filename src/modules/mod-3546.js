'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3546",
  name: "Replace \"R\" with \"V\"",
  description: "Replaces every R with V.",
  run: (value) => String(value).split("R").join("V"),
});
