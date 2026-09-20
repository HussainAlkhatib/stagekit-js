'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2768",
  name: "Replace \"F\" with \"a\"",
  description: "Replaces every F with a.",
  run: (value) => String(value).split("F").join("a"),
});
