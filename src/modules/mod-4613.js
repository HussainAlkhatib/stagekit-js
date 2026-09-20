'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4613",
  name: "Replace \"9\" with \"p\"",
  description: "Replaces every 9 with p.",
  run: (value) => String(value).split("9").join("p"),
});
