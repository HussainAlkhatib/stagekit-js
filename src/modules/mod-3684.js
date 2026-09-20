'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3684",
  name: "Replace \"U\" with \"b\"",
  description: "Replaces every U with b.",
  run: (value) => String(value).split("U").join("b"),
});
