'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0657",
  name: "Replace \"c\" with \"d\"",
  description: "Replaces every c with d.",
  run: (value) => String(value).split("c").join("d"),
});
