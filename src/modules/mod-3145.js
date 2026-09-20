'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3145",
  name: "Replace \"L\" with \"l\"",
  description: "Replaces every L with l.",
  run: (value) => String(value).split("L").join("l"),
});
