'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0216",
  name: "Replace \"a\" with \"r\"",
  description: "Replaces every a with r.",
  run: (value) => String(value).split("a").join("r"),
});
