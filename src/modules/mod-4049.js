'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4049",
  name: "Replace \"0\" with \"a\"",
  description: "Replaces every 0 with a.",
  run: (value) => String(value).split("0").join("a"),
});
