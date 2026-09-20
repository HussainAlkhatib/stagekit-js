'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3473",
  name: "Replace \"Q\" with \"I\"",
  description: "Replaces every Q with I.",
  run: (value) => String(value).split("Q").join("I"),
});
