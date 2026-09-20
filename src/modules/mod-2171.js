'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2171",
  name: "Replace \"v\" with \"n\"",
  description: "Replaces every v with n.",
  run: (value) => String(value).split("v").join("n"),
});
