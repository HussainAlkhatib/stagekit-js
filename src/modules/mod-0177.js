'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0177",
  name: "Mask all but last 12",
  description: "Masks all but the last 12 characters.",
  run: (value) => { const s = String(value); const keep = 12; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
