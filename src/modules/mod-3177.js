'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3177",
  name: "Replace \"L\" with \"S\"",
  description: "Replaces every L with S.",
  run: (value) => String(value).split("L").join("S"),
});
