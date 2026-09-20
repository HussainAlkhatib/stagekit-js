'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3962",
  name: "Replace \"Y\" with \"J\"",
  description: "Replaces every Y with J.",
  run: (value) => String(value).split("Y").join("J"),
});
