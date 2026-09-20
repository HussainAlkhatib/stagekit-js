'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0433",
  name: "Replace \"a\" with \"6\"",
  description: "Replaces every a with 6.",
  run: (value) => String(value).split("a").join("6"),
});
