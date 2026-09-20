'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0654",
  name: "Replace \"c\" with \"b\"",
  description: "Replaces every c with b.",
  run: (value) => String(value).split("c").join("b"),
});
