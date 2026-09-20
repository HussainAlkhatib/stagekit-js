'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0018",
  name: "Replace \"a\" with \"c\"",
  description: "Replaces every a with c.",
  run: (value) => String(value).split("a").join("c"),
});
