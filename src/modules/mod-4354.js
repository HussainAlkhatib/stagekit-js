'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4354",
  name: "Replace \"5\" with \"a\"",
  description: "Replaces every 5 with a.",
  run: (value) => String(value).split("5").join("a"),
});
