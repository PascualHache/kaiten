# Cal.com Integration Plan

## Overview

Integration of Cal.com into Kaiten for booking management, payments, emails, and cancellations.

## Tech Decision

- **Mode**: Cal.com Cloud (Free tier) — zero maintenance, Stripe included
- **Embed**: `@calcom/embed-react` — inline embed with lazy loading
- **Payments**: Stripe via Cal.com (required payment before booking confirmation)
- **Webhooks**: For custom logic (optional, phase 2)

## Phase 1 — Embed Setup

### 1.1 Install dependency

```bash
npm install @calcom/embed-react
```

### 1.2 Cal.com account setup

1. Create account at [cal.com](https://cal.com)
2. Create event types (e.g., "Sesion 30min", "Sesion 60min")
3. Configure availability/schedule
4. Connect Stripe account via Cal.com App Store

### 1.3 Create booking page

Create `src/pages/Reservas.tsx` + `src/pages/Reservas.css` with the inline embed:

```tsx
import Cal from "@calcom/embed-react";
import "./Reservas.css";

export default function Reservas() {
  return (
    <section className="reservas">
      <h1 className="reservas__title">Reservar Cita</h1>
      <div className="reservas__calendar">
        <Cal
          calLink="TU_USUARIO/TU_EVENTO"
          config={{
            theme: "light",
            layout: "month_view",
          }}
        />
      </div>
    </section>
  );
}
```

### 1.4 Lazy loading + route

In `App.tsx`, add the route with `React.lazy` to keep bundle size under control:

```tsx
const Reservas = React.lazy(() => import("./pages/Reservas"));

// Inside router config:
{ path: "/reservas", element: <Reservas /> }
```

### 1.5 Styling

- CSS file: `src/pages/Reservas.css`
- BEM naming: `.reservas`, `.reservas__title`, `.reservas__calendar`
- Customize Cal.com brand color via `config` to match Kaiten's palette
- Responsive: ensure the embed container adapts at all breakpoints

## Phase 2 — Stripe Payments

### 2.1 Connect Stripe

1. In Cal.com dashboard: App Store > Stripe > Install
2. Link Stripe account (OAuth flow)
3. On each event type: enable "Required payment" and set price/currency

### 2.2 Payment modes available

| Mode | Description |
|------|-------------|
| **Required payment** | Pay upfront to confirm booking |
| **No-show fee** | Card held, charged only on no-show |
| **Cancellation fee** | Time-based fee for late cancellations |

### 2.3 Supported payment methods

- Credit/debit cards
- Apple Pay / Google Pay (enable in Stripe Dashboard)

Refunds are automatic on cancellation (Stripe processing fees are not returned).

## Phase 3 — Webhooks (Optional)

For custom server-side logic if needed (e.g., internal analytics, CRM sync, custom notifications).

### 3.1 Relevant events

| Event | Trigger |
|-------|---------|
| `BOOKING_CREATED` | New booking scheduled |
| `BOOKING_CANCELLED` | Booking cancelled |
| `BOOKING_RESCHEDULED` | Booking time changed |
| `BOOKING_PAID` | Payment processed |
| `BOOKING_PAYMENT_INITIATED` | Payment flow started |

### 3.2 Setup

1. Cal.com dashboard: Settings > Developer > Webhooks
2. Add subscriber URL (must be HTTPS on cloud)
3. Select events to listen to
4. Copy webhook secret for signature verification

### 3.3 Signature verification

Cal.com sends `x-cal-signature-256` header (HMAC-SHA256). Verify on your server:

```typescript
import crypto from "crypto";

function verifyWebhook(body: string, signature: string, secret: string): boolean {
  const computed = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  return computed === signature;
}
```

### 3.4 Payload structure

```json
{
  "triggerEvent": "BOOKING_CREATED",
  "createdAt": "2025-01-15T10:30:00.000Z",
  "payload": {
    "title": "Sesion 30min",
    "startTime": "2025-01-20T14:00:00.000Z",
    "endTime": "2025-01-20T14:30:00.000Z",
    "uid": "booking-uid",
    "organizer": { "name": "...", "email": "..." },
    "attendees": [{ "name": "...", "email": "...", "timezone": "..." }]
  }
}
```

## Phase 4 — API Direct (Optional)

For advanced custom flows beyond the embed (e.g., custom booking UI, availability checks).

### 4.1 Authentication

```
Authorization: Bearer cal_live_xxxxxxxx
cal-api-version: 2024-08-13
```

### 4.2 Key endpoints

| Action | Method | Endpoint |
|--------|--------|----------|
| List bookings | `GET` | `/v2/bookings` |
| Create booking | `POST` | `/v2/bookings` |
| Cancel booking | `POST` | `/v2/bookings/{uid}/cancel` |
| Check slots | `GET` | `/v2/slots` |
| List event types | `GET` | `/v2/event-types` |

## Pricing Reference

| Plan | Cost | Notes |
|------|------|-------|
| **Free** | $0 | Unlimited events, Stripe, 100+ integrations |
| **Teams** | $12/user/month | Round-robin, analytics, routing forms |
| **Self-hosted** | $0 (infra costs) | Full control, AGPL-3.0 |

**Recommendation**: Start with Free tier. Covers all Phase 1-2 needs.

## Checklist

- [ ] Create Cal.com account
- [ ] Create event types and configure availability
- [ ] Connect Stripe account
- [ ] Install `@calcom/embed-react`
- [ ] Create `Reservas` page with inline embed
- [ ] Add `/reservas` route with lazy loading
- [ ] Style embed container (responsive, BEM)
- [ ] Test booking flow end-to-end
- [ ] Test payment flow with Stripe test keys
- [ ] Test cancellation + automatic refund
- [ ] (Optional) Set up webhooks for custom logic
