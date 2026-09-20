'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4145",
  name: "Replace \"1\" with \"J\"",
  description: "Replaces every 1 with J.",
  run: (value) => String(value).split("1").join("J"),
});
