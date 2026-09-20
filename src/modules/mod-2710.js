'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2710",
  name: "Replace \"E\" with \"d\"",
  description: "Replaces every E with d.",
  run: (value) => String(value).split("E").join("d"),
});
