'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2769",
  name: "Replace \"F\" with \"b\"",
  description: "Replaces every F with b.",
  run: (value) => String(value).split("F").join("b"),
});
