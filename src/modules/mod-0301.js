'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0301",
  name: "Replace \"a\" with \"D\"",
  description: "Replaces every a with D.",
  run: (value) => String(value).split("a").join("D"),
});
