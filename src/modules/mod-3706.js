'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3706",
  name: "Replace \"U\" with \"x\"",
  description: "Replaces every U with x.",
  run: (value) => String(value).split("U").join("x"),
});
