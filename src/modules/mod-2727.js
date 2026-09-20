'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2727",
  name: "Replace \"E\" with \"u\"",
  description: "Replaces every E with u.",
  run: (value) => String(value).split("E").join("u"),
});
