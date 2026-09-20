'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0268",
  name: "Replace \"a\" with \"x\"",
  description: "Replaces every a with x.",
  run: (value) => String(value).split("a").join("x"),
});
