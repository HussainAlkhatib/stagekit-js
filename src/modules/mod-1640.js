'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1640",
  name: "Replace \"m\" with \"G\"",
  description: "Replaces every m with G.",
  run: (value) => String(value).split("m").join("G"),
});
