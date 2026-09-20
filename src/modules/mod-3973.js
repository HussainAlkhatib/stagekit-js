'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3973",
  name: "Replace \"Y\" with \"U\"",
  description: "Replaces every Y with U.",
  run: (value) => String(value).split("Y").join("U"),
});
