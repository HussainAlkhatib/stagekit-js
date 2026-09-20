'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2863",
  name: "Replace \"G\" with \"J\"",
  description: "Replaces every G with J.",
  run: (value) => String(value).split("G").join("J"),
});
