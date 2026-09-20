'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1854",
  name: "Replace \"q\" with \"b\"",
  description: "Replaces every q with b.",
  run: (value) => String(value).split("q").join("b"),
});
