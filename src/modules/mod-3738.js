'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3738",
  name: "Replace \"U\" with \"4\"",
  description: "Replaces every U with 4.",
  run: (value) => String(value).split("U").join("4"),
});
