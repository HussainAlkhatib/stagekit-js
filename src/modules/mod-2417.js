'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2417",
  name: "Replace \"z\" with \"p\"",
  description: "Replaces every z with p.",
  run: (value) => String(value).split("z").join("p"),
});
