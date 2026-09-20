'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3025",
  name: "Replace \"J\" with \"n\"",
  description: "Replaces every J with n.",
  run: (value) => String(value).split("J").join("n"),
});
