'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3166",
  name: "Replace \"L\" with \"G\"",
  description: "Replaces every L with G.",
  run: (value) => String(value).split("L").join("G"),
});
