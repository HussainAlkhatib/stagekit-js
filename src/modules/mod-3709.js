'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3709",
  name: "Replace \"U\" with \"A\"",
  description: "Replaces every U with A.",
  run: (value) => String(value).split("U").join("A"),
});
