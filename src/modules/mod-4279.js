'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4279",
  name: "Replace \"3\" with \"V\"",
  description: "Replaces every 3 with V.",
  run: (value) => String(value).split("3").join("V"),
});
