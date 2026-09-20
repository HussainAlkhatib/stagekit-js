'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1855",
  name: "Replace \"q\" with \"c\"",
  description: "Replaces every q with c.",
  run: (value) => String(value).split("q").join("c"),
});
