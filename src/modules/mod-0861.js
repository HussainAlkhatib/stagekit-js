'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0861",
  name: "Replace \"d\" with \"k\"",
  description: "Replaces every d with k.",
  run: (value) => String(value).split("d").join("k"),
});
