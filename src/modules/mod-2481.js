'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2481",
  name: "Replace \"A\" with \"s\"",
  description: "Replaces every A with s.",
  run: (value) => String(value).split("A").join("s"),
});
