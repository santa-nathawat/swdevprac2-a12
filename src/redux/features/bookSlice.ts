import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BookingItem } from "../../../interface";

export type BookState = { bookItems: BookingItem[] };

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    addBooking(state, action: PayloadAction<BookingItem>) {
      const index = state.bookItems.findIndex(
        (item) => item.venue === action.payload.venue && item.bookDate === action.payload.bookDate,
      );
      if (index === -1) state.bookItems.push(action.payload);
      else state.bookItems[index] = action.payload;
    },
    removeBooking(state, action: PayloadAction<BookingItem>) {
      const booking = action.payload;
      state.bookItems = state.bookItems.filter(
        (item) => !(item.nameLastname === booking.nameLastname && item.tel === booking.tel &&
          item.venue === booking.venue && item.bookDate === booking.bookDate),
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
