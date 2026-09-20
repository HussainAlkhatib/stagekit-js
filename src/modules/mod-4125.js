'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4125",
  name: "Replace \"1\" with \"p\"",
  description: "Replaces every 1 with p.",
  run: (value) => String(value).split("1").join("p"),
});
