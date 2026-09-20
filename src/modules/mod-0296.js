'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0296",
  name: "Replace \"a\" with \"C\"",
  description: "Replaces every a with C.",
  run: (value) => String(value).split("a").join("C"),
});
