'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3009",
  name: "Replace \"I\" with \"7\"",
  description: "Replaces every I with 7.",
  run: (value) => String(value).split("I").join("7"),
});
