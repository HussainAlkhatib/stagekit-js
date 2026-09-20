'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4186",
  name: "Replace \"2\" with \"p\"",
  description: "Replaces every 2 with p.",
  run: (value) => String(value).split("2").join("p"),
});
