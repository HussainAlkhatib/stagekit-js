'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4247",
  name: "Replace \"3\" with \"p\"",
  description: "Replaces every 3 with p.",
  run: (value) => String(value).split("3").join("p"),
});
