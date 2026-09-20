'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3551",
  name: "Replace \"R\" with \"0\"",
  description: "Replaces every R with 0.",
  run: (value) => String(value).split("R").join("0"),
});
