'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2099",
  name: "Replace \"u\" with \"c\"",
  description: "Replaces every u with c.",
  run: (value) => String(value).split("u").join("c"),
});
