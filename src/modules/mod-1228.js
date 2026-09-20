'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1228",
  name: "Replace \"f\" with \"V\"",
  description: "Replaces every f with V.",
  run: (value) => String(value).split("f").join("V"),
});
