'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3192",
  name: "Replace \"L\" with \"7\"",
  description: "Replaces every L with 7.",
  run: (value) => String(value).split("L").join("7"),
});
