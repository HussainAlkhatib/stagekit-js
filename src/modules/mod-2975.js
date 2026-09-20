'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2975",
  name: "Replace \"I\" with \"y\"",
  description: "Replaces every I with y.",
  run: (value) => String(value).split("I").join("y"),
});
