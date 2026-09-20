'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2203",
  name: "Replace \"v\" with \"U\"",
  description: "Replaces every v with U.",
  run: (value) => String(value).split("v").join("U"),
});
