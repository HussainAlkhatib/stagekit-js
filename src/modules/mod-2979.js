'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2979",
  name: "Replace \"I\" with \"C\"",
  description: "Replaces every I with C.",
  run: (value) => String(value).split("I").join("C"),
});
