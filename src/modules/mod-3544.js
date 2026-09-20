'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3544",
  name: "Replace \"R\" with \"T\"",
  description: "Replaces every R with T.",
  run: (value) => String(value).split("R").join("T"),
});
