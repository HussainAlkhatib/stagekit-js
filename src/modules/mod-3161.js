'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3161",
  name: "Replace \"L\" with \"B\"",
  description: "Replaces every L with B.",
  run: (value) => String(value).split("L").join("B"),
});
