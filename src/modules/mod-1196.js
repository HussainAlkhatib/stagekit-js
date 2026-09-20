'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1196",
  name: "Replace \"f\" with \"p\"",
  description: "Replaces every f with p.",
  run: (value) => String(value).split("f").join("p"),
});
