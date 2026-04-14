import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import type { ItemSchedule, Date } from "../interfaces/index";
import {itemsSchedule} from '../assets/index'

type idData = {
  id: string;
  date: Date;
};

export const initialState: ItemSchedule[] = itemsSchedule;

export const scheduleSlice = createSlice({
  name: "itemsSchedule",
  initialState,
  reducers: {
    dragItem: (state, action: PayloadAction<idData>) => {
      const { id, date } = action.payload;
      const itemFound = state.find((item) => item.id === id);
      if (itemFound) {
        itemFound.date = date;
      }
    },
    editingItem: (state, action: PayloadAction<ItemSchedule>) => {
      const { id, name, description } = action.payload;
      const itemFound = state.find((item) => item.id === id);
      if (itemFound) {
        itemFound.id = id;
        itemFound.name = name;
        itemFound.description = description;
      }
    },
    addItem: (state, action: PayloadAction<ItemSchedule>) => {
      state.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<ItemSchedule>) => {
      const itemFound = state.find(
        (item) => item.id === action.payload.id,
      );
      if (itemFound) {
        state.splice(state.indexOf(itemFound), 1);
      }
    },
  },
});

export const { dragItem, editingItem, addItem, deleteItem } =
  scheduleSlice.actions;

export const selectItem = (state: RootState) => state.itemsSchedule;

export default scheduleSlice.reducer;
