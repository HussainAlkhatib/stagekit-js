'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3687",
  name: "Replace \"U\" with \"e\"",
  description: "Replaces every U with e.",
  run: (value) => String(value).split("U").join("e"),
});
