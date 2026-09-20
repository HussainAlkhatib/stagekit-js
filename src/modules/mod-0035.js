'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0035",
  name: "Replace \"a\" with \"d\"",
  description: "Replaces every a with d.",
  run: (value) => String(value).split("a").join("d"),
});
