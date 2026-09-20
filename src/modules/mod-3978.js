'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3978",
  name: "Replace \"Y\" with \"0\"",
  description: "Replaces every Y with 0.",
  run: (value) => String(value).split("Y").join("0"),
});
