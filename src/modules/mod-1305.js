'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1305",
  name: "Replace \"h\" with \"b\"",
  description: "Replaces every h with b.",
  run: (value) => String(value).split("h").join("b"),
});
