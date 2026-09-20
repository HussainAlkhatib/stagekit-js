'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3441",
  name: "Replace \"Q\" with \"c\"",
  description: "Replaces every Q with c.",
  run: (value) => String(value).split("Q").join("c"),
});
