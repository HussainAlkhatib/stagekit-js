'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3913",
  name: "Replace \"X\" with \"V\"",
  description: "Replaces every X with V.",
  run: (value) => String(value).split("X").join("V"),
});
