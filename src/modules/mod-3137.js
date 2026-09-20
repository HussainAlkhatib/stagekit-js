'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3137",
  name: "Replace \"L\" with \"d\"",
  description: "Replaces every L with d.",
  run: (value) => String(value).split("L").join("d"),
});
