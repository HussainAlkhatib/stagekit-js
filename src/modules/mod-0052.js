'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0052",
  name: "Replace \"a\" with \"e\"",
  description: "Replaces every a with e.",
  run: (value) => String(value).split("a").join("e"),
});
