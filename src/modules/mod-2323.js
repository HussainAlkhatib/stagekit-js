'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2323",
  name: "Replace \"x\" with \"S\"",
  description: "Replaces every x with S.",
  run: (value) => String(value).split("x").join("S"),
});
