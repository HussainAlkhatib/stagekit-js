'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3474",
  name: "Replace \"Q\" with \"J\"",
  description: "Replaces every Q with J.",
  run: (value) => String(value).split("Q").join("J"),
});
