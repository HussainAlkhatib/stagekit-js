'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1233",
  name: "Replace \"f\" with \"0\"",
  description: "Replaces every f with 0.",
  run: (value) => String(value).split("f").join("0"),
});
