'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3119",
  name: "Replace \"K\" with \"V\"",
  description: "Replaces every K with V.",
  run: (value) => String(value).split("K").join("V"),
});
