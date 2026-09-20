'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3075",
  name: "Replace \"K\" with \"c\"",
  description: "Replaces every K with c.",
  run: (value) => String(value).split("K").join("c"),
});
