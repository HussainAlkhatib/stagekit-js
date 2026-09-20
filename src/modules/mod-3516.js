'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3516",
  name: "Replace \"R\" with \"q\"",
  description: "Replaces every R with q.",
  run: (value) => String(value).split("R").join("q"),
});
