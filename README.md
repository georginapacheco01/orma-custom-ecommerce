# Form & Forge – Backend API

Backend service for a parametric furniture eCommerce platform built with Express.  
Handles custom furniture designs, order processing, and simulated manufacturing output.

---

## Overview

This API allows users to create furniture by defining parameters (dimensions, material, etc.) instead of selecting static products.

The system:

- parametric design data
- stores configurations
- generates simulated manufacturing files (STL)
- manages orders

---

## Tech Stack

- Node.js
- Express
- Stripe (optional, test mode)

---

## Features

- REST API for custom furniture designs
- Parametric data storage (no fixed SKUs)
- Simulated STL file generation
- Order creation and retrieval
- Basic validation

---

## Project Structure

```plaintext
backend/
├── src/
│   ├── app.ts
│   ├── server.ts
│   │
│   ├── routes/
│   │   ├── index.ts
│   │   ├── product.routes.ts
│   │   └── order.routes.ts
│   │
│   ├── controllers/
│   │   ├── product.controller.ts
│   │   └── order.controller.ts
│   │
│   ├── services/
│   │   ├── product.service.ts
│   │   └── order.service.ts
│   │
│   ├── models/
│   │   ├── product.model.ts
│   │   └── order.model.ts
│   │
│   ├── utils/
│   │   └── asyncHandler.ts
│   │
│   ├── middleware/
│   │   └── error.middleware.ts
│   │
│   └── config/
│       └── env.ts
│
├── tests/
│   ├── unit/
│   │   ├── product.service.test.ts
│   │   └── order.service.test.ts
│   │
│   └── integration/
│       ├── product.api.test.ts
│       └── order.api.test.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

npm install

## Run project

npm run dev
