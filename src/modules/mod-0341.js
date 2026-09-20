'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0341",
  name: "Replace \"a\" with \"L\"",
  description: "Replaces every a with L.",
  run: (value) => String(value).split("a").join("L"),
});
