'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0927",
  name: "Replace \"d\" with \"G\"",
  description: "Replaces every d with G.",
  run: (value) => String(value).split("d").join("G"),
});
