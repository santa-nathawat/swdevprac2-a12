"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";
import { addBooking } from "@/redux/features/bookSlice";
import type { AppDispatch } from "@/redux/store";

export default function DateReserve() {
  const dispatch = useDispatch<AppDispatch>();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [dateError, setDateError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    if (!bookDate?.isValid()) {
      setDateError(true);
      return;
    }
    if (!nameLastname.trim() || !tel.trim() || !venue) return;
    dispatch(addBooking({
      nameLastname: nameLastname.trim(),
      tel: tel.trim(),
      venue,
      bookDate: bookDate.format("YYYY/MM/DD"),
    }));
    setDateError(false);
    setSubmitted(true);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form aria-label="Book a venue" onSubmit={handleSubmit} className="grid gap-6" onChange={() => setSubmitted(false)}>
        <DatePicker
          label="Event date"
          value={bookDate}
          onChange={(value) => { setBookDate(value); setDateError(false); setSubmitted(false); }}
          format="YYYY/MM/DD"
          slotProps={{
            textField: {
              fullWidth: true,
              name: "Event-Date",
              variant: "standard",
              required: true,
              error: dateError,
              helperText: dateError ? "Choose a valid event date." : undefined,
            },
          }}
        />
        <TextField fullWidth label="Name-Lastname" name="Name-Lastname" required variant="standard" value={nameLastname} onChange={(event) => setNameLastname(event.target.value)} />
        <TextField fullWidth label="Contact-Number" name="Contact-Number" type="tel" required variant="standard" value={tel} onChange={(event) => setTel(event.target.value)} />
        <FormControl fullWidth required variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select id="venue" label="Venue" labelId="venue-label" name="venue" value={venue} onChange={(event) => { setVenue(event.target.value); setSubmitted(false); }}>
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
        <p className="text-sm text-zinc-500">Booking the same venue on the same date replaces your previous reservation details.</p>
        <Button type="submit" name="Book Venue" variant="contained" color="success">Book Venue</Button>
        {submitted && <p role="status" className="rounded-xl bg-emerald-50 p-4 text-emerald-900">Venue booked successfully. <Link href="/mybooking" className="font-semibold underline">View My Booking</Link></p>}
      </form>
    </LocalizationProvider>
  );
}
