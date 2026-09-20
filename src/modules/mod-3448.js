'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3448",
  name: "Replace \"Q\" with \"j\"",
  description: "Replaces every Q with j.",
  run: (value) => String(value).split("Q").join("j"),
});
