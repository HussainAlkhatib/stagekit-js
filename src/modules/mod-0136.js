'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0136",
  name: "Replace \"a\" with \"j\"",
  description: "Replaces every a with j.",
  run: (value) => String(value).split("a").join("j"),
});
