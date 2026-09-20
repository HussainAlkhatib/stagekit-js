'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1334",
  name: "Replace \"h\" with \"F\"",
  description: "Replaces every h with F.",
  run: (value) => String(value).split("h").join("F"),
});
