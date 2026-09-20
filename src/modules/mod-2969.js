'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2969",
  name: "Replace \"I\" with \"s\"",
  description: "Replaces every I with s.",
  run: (value) => String(value).split("I").join("s"),
});
