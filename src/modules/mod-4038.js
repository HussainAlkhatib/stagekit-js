'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4038",
  name: "Replace \"Z\" with \"Y\"",
  description: "Replaces every Z with Y.",
  run: (value) => String(value).split("Z").join("Y"),
});
