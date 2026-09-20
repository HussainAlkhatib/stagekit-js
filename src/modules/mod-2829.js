'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2829",
  name: "Replace \"G\" with \"a\"",
  description: "Replaces every G with a.",
  run: (value) => String(value).split("G").join("a"),
});
