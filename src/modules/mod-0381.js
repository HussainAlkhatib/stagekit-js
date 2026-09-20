'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0381",
  name: "Replace \"a\" with \"T\"",
  description: "Replaces every a with T.",
  run: (value) => String(value).split("a").join("T"),
});
