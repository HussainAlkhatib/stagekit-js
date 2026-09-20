'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0120",
  name: "Replace \"a\" with \"i\"",
  description: "Replaces every a with i.",
  run: (value) => String(value).split("a").join("i"),
});
