'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3734",
  name: "Replace \"U\" with \"0\"",
  description: "Replaces every U with 0.",
  run: (value) => String(value).split("U").join("0"),
});
