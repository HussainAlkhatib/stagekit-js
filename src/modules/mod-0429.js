'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0429",
  name: "Replace \"a\" with \"5\"",
  description: "Replaces every a with 5.",
  run: (value) => String(value).split("a").join("5"),
});
