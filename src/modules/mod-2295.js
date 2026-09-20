'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2295",
  name: "Replace \"x\" with \"p\"",
  description: "Replaces every x with p.",
  run: (value) => String(value).split("x").join("p"),
});
