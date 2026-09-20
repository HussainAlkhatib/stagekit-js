'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1872",
  name: "Replace \"q\" with \"u\"",
  description: "Replaces every q with u.",
  run: (value) => String(value).split("q").join("u"),
});
