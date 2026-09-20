'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2021",
  name: "Replace \"s\" with \"V\"",
  description: "Replaces every s with V.",
  run: (value) => String(value).split("s").join("V"),
});
