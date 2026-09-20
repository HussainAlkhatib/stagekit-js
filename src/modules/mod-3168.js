'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3168",
  name: "Replace \"L\" with \"I\"",
  description: "Replaces every L with I.",
  run: (value) => String(value).split("L").join("I"),
});
