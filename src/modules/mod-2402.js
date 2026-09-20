'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2402",
  name: "Replace \"z\" with \"a\"",
  description: "Replaces every z with a.",
  run: (value) => String(value).split("z").join("a"),
});
