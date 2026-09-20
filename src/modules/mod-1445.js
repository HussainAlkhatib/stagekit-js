'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1445",
  name: "Replace \"j\" with \"u\"",
  description: "Replaces every j with u.",
  run: (value) => String(value).split("j").join("u"),
});
