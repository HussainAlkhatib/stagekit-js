'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2955",
  name: "Replace \"I\" with \"e\"",
  description: "Replaces every I with e.",
  run: (value) => String(value).split("I").join("e"),
});
