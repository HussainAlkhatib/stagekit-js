'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3936",
  name: "Replace \"Y\" with \"j\"",
  description: "Replaces every Y with j.",
  run: (value) => String(value).split("Y").join("j"),
});
