'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2518",
  name: "Replace \"A\" with \"4\"",
  description: "Replaces every A with 4.",
  run: (value) => String(value).split("A").join("4"),
});
