'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2446",
  name: "Replace \"z\" with \"T\"",
  description: "Replaces every z with T.",
  run: (value) => String(value).split("z").join("T"),
});
