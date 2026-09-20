'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2998",
  name: "Replace \"I\" with \"W\"",
  description: "Replaces every I with W.",
  run: (value) => String(value).split("I").join("W"),
});
