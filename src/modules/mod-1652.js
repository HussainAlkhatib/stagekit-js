'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1652",
  name: "Replace \"m\" with \"S\"",
  description: "Replaces every m with S.",
  run: (value) => String(value).split("m").join("S"),
});
