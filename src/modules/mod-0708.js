'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0708",
  name: "Replace \"c\" with \"u\"",
  description: "Replaces every c with u.",
  run: (value) => String(value).split("c").join("u"),
});
