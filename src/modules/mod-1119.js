'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1119",
  name: "Replace \"e\" with \"J\"",
  description: "Replaces every e with J.",
  run: (value) => String(value).split("e").join("J"),
});
