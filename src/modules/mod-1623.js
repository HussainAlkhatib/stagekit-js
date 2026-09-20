'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1623",
  name: "Replace \"m\" with \"p\"",
  description: "Replaces every m with p.",
  run: (value) => String(value).split("m").join("p"),
});
