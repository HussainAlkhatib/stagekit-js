'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3840",
  name: "Replace \"W\" with \"J\"",
  description: "Replaces every W with J.",
  run: (value) => String(value).split("W").join("J"),
});
