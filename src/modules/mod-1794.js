'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1794",
  name: "Replace \"p\" with \"c\"",
  description: "Replaces every p with c.",
  run: (value) => String(value).split("p").join("c"),
});
