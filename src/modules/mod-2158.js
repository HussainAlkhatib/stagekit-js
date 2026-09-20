'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2158",
  name: "Replace \"v\" with \"a\"",
  description: "Replaces every v with a.",
  run: (value) => String(value).split("v").join("a"),
});
