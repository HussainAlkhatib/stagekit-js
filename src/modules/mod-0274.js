'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0274",
  name: "Replace \"a\" with \"y\"",
  description: "Replaces every a with y.",
  run: (value) => String(value).split("a").join("y"),
});
