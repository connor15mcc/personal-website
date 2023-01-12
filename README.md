# Personal Website

This is my personal website showcasing my experiences, skills, and projects.
Built with React, Typescript, and Vite.

## Data Dependency

This project assumes an adjacent directory named `resume` which contains a file
`data.yaml`, fulfilling the specification outlined in `src/data.ts`. This is
fulfilled locally via checking out my (private) `resume` repository alongside
and upon deployment via custom Github Action hooks.

## Github Actions

This repository is set to statically build the Vite project upon pushing a new
commit, which is then copied onto the `gh-pages` branch via Github Actions. It
also accepts a hook (from the `resume` repo) which rebuilds the project.
