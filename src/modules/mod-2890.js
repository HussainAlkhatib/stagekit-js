'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2890",
  name: "Replace \"H\" with \"a\"",
  description: "Replaces every H with a.",
  run: (value) => String(value).split("H").join("a"),
});
