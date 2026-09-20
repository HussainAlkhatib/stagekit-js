'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3987",
  name: "Replace \"Y\" with \"9\"",
  description: "Replaces every Y with 9.",
  run: (value) => String(value).split("Y").join("9"),
});
