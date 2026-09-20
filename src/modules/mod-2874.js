'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2874",
  name: "Replace \"G\" with \"U\"",
  description: "Replaces every G with U.",
  run: (value) => String(value).split("G").join("U"),
});
