'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2386",
  name: "Replace \"y\" with \"U\"",
  description: "Replaces every y with U.",
  run: (value) => String(value).split("y").join("U"),
});
