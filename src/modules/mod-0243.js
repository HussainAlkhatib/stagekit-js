'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0243",
  name: "Replace \"a\" with \"u\"",
  description: "Replaces every a with u.",
  run: (value) => String(value).split("a").join("u"),
});
