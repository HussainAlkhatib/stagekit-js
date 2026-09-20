'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4369",
  name: "Replace \"5\" with \"p\"",
  description: "Replaces every 5 with p.",
  run: (value) => String(value).split("5").join("p"),
});
