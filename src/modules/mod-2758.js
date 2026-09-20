'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2758",
  name: "Replace \"E\" with \"0\"",
  description: "Replaces every E with 0.",
  run: (value) => String(value).split("E").join("0"),
});
