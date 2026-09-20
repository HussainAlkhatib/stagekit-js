'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3805",
  name: "Replace \"W\" with \"a\"",
  description: "Replaces every W with a.",
  run: (value) => String(value).split("W").join("a"),
});
