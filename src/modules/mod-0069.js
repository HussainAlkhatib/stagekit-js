'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0069",
  name: "Replace \"a\" with \"f\"",
  description: "Replaces every a with f.",
  run: (value) => String(value).split("a").join("f"),
});
