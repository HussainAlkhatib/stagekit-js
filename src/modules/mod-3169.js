'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3169",
  name: "Replace \"L\" with \"J\"",
  description: "Replaces every L with J.",
  run: (value) => String(value).split("L").join("J"),
});
