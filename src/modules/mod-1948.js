'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1948",
  name: "Replace \"r\" with \"J\"",
  description: "Replaces every r with J.",
  run: (value) => String(value).split("r").join("J"),
});
