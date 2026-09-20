'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3528",
  name: "Replace \"R\" with \"C\"",
  description: "Replaces every R with C.",
  run: (value) => String(value).split("R").join("C"),
});
