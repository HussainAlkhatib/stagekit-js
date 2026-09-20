'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3471",
  name: "Replace \"Q\" with \"G\"",
  description: "Replaces every Q with G.",
  run: (value) => String(value).split("Q").join("G"),
});
