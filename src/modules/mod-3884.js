'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3884",
  name: "Replace \"X\" with \"s\"",
  description: "Replaces every X with s.",
  run: (value) => String(value).split("X").join("s"),
});
