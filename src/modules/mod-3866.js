'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3866",
  name: "Replace \"X\" with \"a\"",
  description: "Replaces every X with a.",
  run: (value) => String(value).split("X").join("a"),
});
