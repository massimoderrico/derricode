export const services = [
  { number: '01', title: 'AI implementation', summary: 'Turn a business priority into a system people can use.', detail: 'We scope the use case, shape the operating model, and implement the right combination of model, context, tools, and human review.' },
  { number: '02', title: 'Workflow automation', summary: 'Move repeatable work through the tools you already have.', detail: 'We connect inboxes, documents, approvals, and business software into workflows that fit how your team actually operates.' },
  { number: '03', title: 'Applications & integrations', summary: 'Build the product layer around the opportunity.', detail: 'We ship full-stack web and mobile applications, APIs, and MCP integrations that make AI reliable and usable.' },
]

export const processSteps = [
  ['01', 'Frame the real constraint', 'Business goal, people, workflow, data, and constraints. We make the problem legible before choosing the technology.'],
  ['02', 'Design the first useful loop', 'We define the smallest release that can create feedback: experience, data, integrations, boundaries, and ownership.'],
  ['03', 'Implement in the open', 'Working software and automation arrive in visible increments, so feedback is part of delivery—not a final handoff.'],
  ['04', 'Enable the next move', 'We document the moving parts, refine the system, and leave your team with a clear path to operate and extend it.'],
] as const

export const capabilities = [
  ['01', 'Web products', 'Responsive, accessible interfaces with a clear path from first interaction to useful outcome.'],
  ['02', 'Mobile apps', 'Native-feeling mobile experiences for customer workflows and internal operations.'],
  ['03', 'APIs & data workflows', 'Typed services and integrations that move approved data between the systems you already use.'],
  ['04', 'MCP integrations', 'MCP servers and clients that give assistants explicit, permissioned access to tools and data.'],
  ['05', 'Internal AI tools', 'Focused copilots and operator interfaces grounded in the context your team needs.'],
  ['06', 'Automation', 'Event-driven workflows for documents, communication, approvals, and recurring operations.'],
] as const
