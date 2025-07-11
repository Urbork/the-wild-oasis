# 🏨 Hotel Management Dashboard

A full-featured hotel management web application built to support hotel staff in handling guest bookings, cabin data, payments, check-ins, and more. Designed for internal use by hotel employees only.

## 🚀 Features

### 🔐 Authentication

- Only hotel employees can access the application.
- New user registration is only available inside the app.
- Users can:
  - Upload an avatar.
  - Change their name and password.

### 🛏️ Cabin Management

- Table view of all cabins with:
  - Photo, name, capacity, price, current discount.
- Create, update, and delete cabins (including photo uploads).

### 📅 Bookings

- Table view of all bookings, including:
  - Arrival and departure dates.
  - Status (`unconfirmed`, `checked in`, `checked out`).
  - Cabin and guest data.
  - Number of guests, nights, guest notes.
  - Whether breakfast was booked and the price.

### ✅ Check-In / Check-Out

- Check-in, check-out, or delete bookings.
- Accept payment during check-in if not paid yet.
- Option to add breakfast for the entire stay during check-in.

### 👤 Guests

- Guest profiles include:
  - Full name, email, national ID, nationality.
  - Country flag for easy identification.

### 📊 Dashboard

- View stats for the past 7, 30, or 90 days:
  - Guest check-ins and check-outs for today.
  - Recent bookings, sales, check-ins, occupancy rate.
  - Daily hotel sales (total + breakfast-only "extras").
  - Average stay duration and other key metrics.

### ⚙️ Settings

- Define global settings for the app:
  - Breakfast price.
  - Minimum and maximum nights per booking.
  - Maximum number of guests.
  - Enable/disable dark mode.

## 🛠️ Tech Stack

- React, React Query, Styled Components
- Database: Supabase
- Authentication: Supabase Auth
- Dates: date-fns
- Charts: Recharts
- Notifications: React Hot Toast

## 📦 Installation

```bash
git clone https://github.com/Urbork/the-wild-oasis.git
cd the-wild-oasis
npm install
npm run dev
```

## ✅ Requirements

- A Supabase project or custom backend (API endpoints for bookings, guests, cabins, auth, etc.)

## 💡 Future Enhancements

- Role-based permissions
- Email notifications for bookings
