'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0371",
  name: "Replace \"a\" with \"R\"",
  description: "Replaces every a with R.",
  run: (value) => String(value).split("a").join("R"),
});
