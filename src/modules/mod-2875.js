'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2875",
  name: "Replace \"G\" with \"V\"",
  description: "Replaces every G with V.",
  run: (value) => String(value).split("G").join("V"),
});
