'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1632",
  name: "Replace \"m\" with \"y\"",
  description: "Replaces every m with y.",
  run: (value) => String(value).split("m").join("y"),
});
