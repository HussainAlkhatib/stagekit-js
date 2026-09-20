'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2298",
  name: "Replace \"x\" with \"s\"",
  description: "Replaces every x with s.",
  run: (value) => String(value).split("x").join("s"),
});
