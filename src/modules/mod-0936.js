'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0936",
  name: "Replace \"d\" with \"J\"",
  description: "Replaces every d with J.",
  run: (value) => String(value).split("d").join("J"),
});
