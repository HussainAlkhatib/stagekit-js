'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3607",
  name: "Replace \"S\" with \"V\"",
  description: "Replaces every S with V.",
  run: (value) => String(value).split("S").join("V"),
});
