'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0103",
  name: "Replace \"a\" with \"h\"",
  description: "Replaces every a with h.",
  run: (value) => String(value).split("a").join("h"),
});
