'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3144",
  name: "Replace \"L\" with \"k\"",
  description: "Replaces every L with k.",
  run: (value) => String(value).split("L").join("k"),
});
