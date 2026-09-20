'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3558",
  name: "Replace \"R\" with \"7\"",
  description: "Replaces every R with 7.",
  run: (value) => String(value).split("R").join("7"),
});
