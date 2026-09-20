'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2647",
  name: "Replace \"D\" with \"b\"",
  description: "Replaces every D with b.",
  run: (value) => String(value).split("D").join("b"),
});
