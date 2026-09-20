'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2302",
  name: "Replace \"x\" with \"w\"",
  description: "Replaces every x with w.",
  run: (value) => String(value).split("x").join("w"),
});
