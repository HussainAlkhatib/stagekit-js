'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1663",
  name: "Replace \"m\" with \"3\"",
  description: "Replaces every m with 3.",
  run: (value) => String(value).split("m").join("3"),
});
