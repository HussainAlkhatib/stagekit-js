'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3035",
  name: "Replace \"J\" with \"x\"",
  description: "Replaces every J with x.",
  run: (value) => String(value).split("J").join("x"),
});
