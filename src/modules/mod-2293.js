'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2293",
  name: "Replace \"x\" with \"n\"",
  description: "Replaces every x with n.",
  run: (value) => String(value).split("x").join("n"),
});
