'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3440",
  name: "Replace \"Q\" with \"b\"",
  description: "Replaces every Q with b.",
  run: (value) => String(value).split("Q").join("b"),
});
