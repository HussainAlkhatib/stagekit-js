'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3707",
  name: "Replace \"U\" with \"y\"",
  description: "Replaces every U with y.",
  run: (value) => String(value).split("U").join("y"),
});
