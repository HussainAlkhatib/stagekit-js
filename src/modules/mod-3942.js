'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3942",
  name: "Replace \"Y\" with \"p\"",
  description: "Replaces every Y with p.",
  run: (value) => String(value).split("Y").join("p"),
});
