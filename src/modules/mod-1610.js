'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1610",
  name: "Replace \"m\" with \"b\"",
  description: "Replaces every m with b.",
  run: (value) => String(value).split("m").join("b"),
});
