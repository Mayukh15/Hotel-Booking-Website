Hotel Booking Website – QuickStay (MERN Stack)

QuickStay is a full-stack hotel booking web application built with the MERN stack, featuring secure user authentication via Clerk
and seamless payments powered by Stripe. Designed for scalability and production readiness, 
QuickStay offers a smooth booking experience with clean UI and robust backend logic.

## 🚀 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB

**Integrations:**
- Clerk (Authentication)
- Stripe (Payment Gateway)

## 🔐 Features

- 🔑 **User Authentication** — Secure sign-up/sign-in via Clerk with session management
- 🏨 **Hotel Listings** — Browse and filter available stays with responsive UI
- 📅 **Booking System** — Real-time booking logic linked to MongoDB
- 💳 **Stripe Payments** — Integrated checkout flow with confirmation emails
- 📦 **RESTful API** — Modular Express routes with error handling and production-grade logging
- 📄 **Webhook Handling** — Stripe + Clerk webhooks for booking confirmation and user sync

🚀 Future Scope
The QuickStay platform is designed with scalability and real-world usability in mind. While the current version showcases a polished frontend and robust authentication flow, several high-impact features are actively being developed to elevate the product to production readiness:
💳** 1. Stripe Payment Gateway Integration**
- Implement secure payment flow using Stripe Checkout and test mode for booking transactions.
- Configure webhook listeners to validate payment success and update booking status in real-time.
- Extend support for multiple payment methods including UPI, cards, and wallets (via Stripe extensions).
- 
**🏨 2. Booking Logic & Inventory Management**
- Finalize backend logic to handle room availability, date-based filtering, and booking conflicts.
- Enable real-time updates to room status post-payment confirmation.
- Introduce booking history and cancellation flow for authenticated users.
- 
📲 3. Progressive Web App (PWA) Support
- Convert QuickStay into a PWA for offline access, home screen installation, and faster load times.
- Optimize caching strategies for hotel data and user sessions.
- 
🔔 4. Notification System
- Integrate email and SMS alerts for booking confirmations, cancellations, and payment receipts.
- Use services like Firebase Cloud Messaging or Twilio for scalable delivery.
🧾 5. Admin Dashboard (Phase 2)
- Build a secure admin panel to manage hotel listings, booking analytics, and user feedback.
- Include role-based access control and data visualization for operational insights.

