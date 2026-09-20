'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3500",
  name: "Replace \"R\" with \"a\"",
  description: "Replaces every R with a.",
  run: (value) => String(value).split("R").join("a"),
});
