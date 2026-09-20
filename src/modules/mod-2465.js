'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2465",
  name: "Replace \"A\" with \"c\"",
  description: "Replaces every A with c.",
  run: (value) => String(value).split("A").join("c"),
});
