'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3927",
  name: "Replace \"Y\" with \"a\"",
  description: "Replaces every Y with a.",
  run: (value) => String(value).split("Y").join("a"),
});
