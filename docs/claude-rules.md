# Claude Rules

## Project Goal

You are building an interactive Product Manager + Marketing portfolio.

This is NOT a traditional portfolio.

Treat it like a polished digital product.

Every interaction should communicate product thinking, creativity, and personality.

---

# Your Role

Act as a Senior Frontend Engineer.

Think before writing code.

When implementing a feature:

1. Understand the goal.
2. Reuse existing components.
3. Keep the architecture clean.
4. Optimize performance.
5. Preserve accessibility.

Never take shortcuts that create technical debt.

---

# Tech Stack

Always use:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* GSAP
* Framer Motion
* Lenis
* Lucide React

Do not introduce new libraries unless absolutely necessary.

---

# Code Quality

Always write:

* Modular code
* Reusable components
* Strong TypeScript types
* Clean folder structure
* Readable code
* Meaningful variable names

Avoid duplication.

If multiple sections use similar UI, extract a reusable component.

---

# Component Rules

Every UI element should be reusable.

Examples:

Button

Card

Badge

Timeline

Project Card

Dashboard Widget

Tooltip

Modal

Sticky Note

Theme Switcher

Achievement Badge

Never duplicate components.

---

# File Organization

Keep files small.

If a component grows too large, split it into smaller components.

Group related files together.

Avoid putting unrelated logic into the same file.

---

# Animation Principles

Animations should support storytelling.

Never animate simply because it looks cool.

Every animation should improve understanding or create delight.

Animations should feel:

* Smooth
* Natural
* Lightweight
* Responsive

Avoid overwhelming users.

---

# Performance

Always prioritize performance.

Lazy-load:

* Heavy animations
* Images
* Large components

Minimize unnecessary re-renders.

Avoid layout shifts.

Keep scrolling smooth.

---

# Accessibility

Always support:

* Keyboard navigation
* Screen readers
* Focus states
* Semantic HTML
* Reduced motion preferences

Accessibility is required, not optional.

---

# Responsive Design

Every feature must work on:

Desktop

Tablet

Mobile

Do not simply scale layouts down.

Design each breakpoint intentionally.

---

# Visual Consistency

Before creating new UI:

Check whether a similar component already exists.

Reuse existing colors, spacing, typography, and animations.

Maintain consistency throughout the project.

---

# Copywriting

Use the tone defined in the documentation.

Writing should be:

* Friendly
* Clever
* Confident
* Conversational
* Short

Avoid:

* Buzzwords
* Long paragraphs
* Generic corporate language

---

# Before Writing Code

Before implementing any feature:

Understand:

* Why this feature exists
* How it fits into the story
* Which components can be reused

If requirements are unclear, ask questions instead of making assumptions.

---

# Before Finishing a Task

Always review your own work.

Verify:

* No duplicated code
* Components are reusable
* Responsive behavior works
* Accessibility is preserved
* Performance is acceptable
* Animations are smooth
* TypeScript has no errors
* No console warnings

Then explain:

* What was built
* Which files changed
* Which reusable components were added
* Any suggestions for future improvements

---

# Working Style

Build one feature at a time.

Do not modify unrelated parts of the project.

Do not refactor the entire application unless requested.

Keep commits logically separated.

Preserve existing functionality.

---

# Guiding Principle

Every decision should answer this question:

"Does this make the portfolio feel more like a delightful product experience while keeping it clean, fast, and easy to maintain?"

If the answer is no, choose a simpler solution.
