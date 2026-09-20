'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2214",
  name: "Replace \"v\" with \"5\"",
  description: "Replaces every v with 5.",
  run: (value) => String(value).split("v").join("5"),
});
