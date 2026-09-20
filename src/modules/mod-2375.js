'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2375",
  name: "Replace \"y\" with \"J\"",
  description: "Replaces every y with J.",
  run: (value) => String(value).split("y").join("J"),
});
