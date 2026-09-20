'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3779",
  name: "Replace \"V\" with \"J\"",
  description: "Replaces every V with J.",
  run: (value) => String(value).split("V").join("J"),
});
