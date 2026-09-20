'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1427",
  name: "Replace \"j\" with \"b\"",
  description: "Replaces every j with b.",
  run: (value) => String(value).split("j").join("b"),
});
