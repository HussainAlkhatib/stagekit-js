'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2331",
  name: "Replace \"x\" with \"0\"",
  description: "Replaces every x with 0.",
  run: (value) => String(value).split("x").join("0"),
});
