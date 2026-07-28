export const services = [
  { number: '01', title: 'AI implementation', summary: 'Turn a real business priority into a useful system.', detail: 'We scope the use case, shape the operating model, and implement the right combination of model, context, tools, and human review.' },
  { number: '02', title: 'AI automations', summary: 'Make repeatable work move without the handoffs.', detail: 'We connect inboxes, documents, approvals, and business software into workflows that fit the way your team already operates.' },
  { number: '03', title: 'Applications & integrations', summary: 'Build the product layer around the opportunity.', detail: 'We ship full-stack web and mobile apps, APIs, and MCP integrations that make AI capabilities reliable and usable.' },
]
export const processSteps = [
  ['01', 'Discover the constraint', 'We start with the business goal, the people involved, the current workflow, and the constraints that matter.'],
  ['02', 'Shape the first release', 'We choose a focused first outcome and define the experience, data, integrations, and boundaries before code makes decisions expensive.'],
  ['03', 'Implement in the open', 'We build working software and automation in visible increments so feedback is part of delivery, not a final handoff.'],
  ['04', 'Iterate and enable', 'We refine what the system does, document the moving parts, and leave a clear path for your team to operate and extend it.'],
] as const
export const capabilities = [
  ['01', 'Web products', 'Responsive, accessible interfaces with a clear path from first interaction to useful outcome.'],
  ['02', 'Mobile apps', 'Native-feeling mobile experiences for customer workflows and internal operations.'],
  ['03', 'APIs & data workflows', 'Typed services and integrations that move approved data between the systems you already use.'],
  ['04', 'MCP integrations', 'MCP servers and clients that give assistants explicit, permissioned access to tools and data.'],
  ['05', 'Internal AI tools', 'Focused copilots and operator interfaces grounded in the context your team needs.'],
  ['06', 'Automation', 'Event-driven workflows for documents, communication, approvals, and recurring operations.'],
] as const
