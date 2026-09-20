'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3736",
  name: "Replace \"U\" with \"2\"",
  description: "Replaces every U with 2.",
  run: (value) => String(value).split("U").join("2"),
});
