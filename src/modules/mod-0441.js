'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0441",
  name: "Replace \"a\" with \"8\"",
  description: "Replaces every a with 8.",
  run: (value) => String(value).split("a").join("8"),
});
