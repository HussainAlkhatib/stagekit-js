'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2280",
  name: "Replace \"x\" with \"a\"",
  description: "Replaces every x with a.",
  run: (value) => String(value).split("x").join("a"),
});
