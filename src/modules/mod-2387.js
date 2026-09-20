'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2387",
  name: "Replace \"y\" with \"V\"",
  description: "Replaces every y with V.",
  run: (value) => String(value).split("y").join("V"),
});
