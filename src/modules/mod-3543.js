'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3543",
  name: "Replace \"R\" with \"S\"",
  description: "Replaces every R with S.",
  run: (value) => String(value).split("R").join("S"),
});
