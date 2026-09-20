'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1661",
  name: "Replace \"m\" with \"1\"",
  description: "Replaces every m with 1.",
  run: (value) => String(value).split("m").join("1"),
});
