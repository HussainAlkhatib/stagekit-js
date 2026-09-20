'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0876",
  name: "Replace \"d\" with \"p\"",
  description: "Replaces every d with p.",
  run: (value) => String(value).split("d").join("p"),
});
