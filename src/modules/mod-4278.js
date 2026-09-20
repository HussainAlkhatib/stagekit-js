'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4278",
  name: "Replace \"3\" with \"U\"",
  description: "Replaces every 3 with U.",
  run: (value) => String(value).split("3").join("U"),
});
