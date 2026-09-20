'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0326",
  name: "Replace \"a\" with \"I\"",
  description: "Replaces every a with I.",
  run: (value) => String(value).split("a").join("I"),
});
