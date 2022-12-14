import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "Jade Palace",
    streetAddress: "249 Wilton Rd.",
    townAddress: "Farmington, ME 04938",
    phone: "(207) 778 - 2098",
    hours: {
        sunday: "11:00a - 8:30p",
        monday: "3:00p - 8:30p",
        tuesday: "3:00p - 8:30p",
        wednesday: "11:00a - 8:30p",
        thursday: "11:00a - 8:30p",
        friday: "11:00a - 8:30p",
        saturday: "11:00a - 8:30p"
    }
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState
});

export default restaurantSlice.reducer;