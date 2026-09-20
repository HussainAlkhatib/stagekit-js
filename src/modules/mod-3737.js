'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3737",
  name: "Replace \"U\" with \"3\"",
  description: "Replaces every U with 3.",
  run: (value) => String(value).split("U").join("3"),
});
