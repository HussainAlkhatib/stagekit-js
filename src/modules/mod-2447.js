'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2447",
  name: "Replace \"z\" with \"U\"",
  description: "Replaces every z with U.",
  run: (value) => String(value).split("z").join("U"),
});
