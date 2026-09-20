'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1435",
  name: "Replace \"j\" with \"k\"",
  description: "Replaces every j with k.",
  run: (value) => String(value).split("j").join("k"),
});
