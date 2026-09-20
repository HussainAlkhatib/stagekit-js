'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3711",
  name: "Replace \"U\" with \"C\"",
  description: "Replaces every U with C.",
  run: (value) => String(value).split("U").join("C"),
});
