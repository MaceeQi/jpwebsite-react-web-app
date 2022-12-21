import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "Jade Palace",
    address: {
        street: "249 Wilton Rd.",
        town: "Farmington, ME 04938",
        location: "Routes 2 & 4 - Next to Hannaford"
    },
    phone: "(207) 778 - 2098",
    hours: {
        sunday: "11:00a - 8:00p",
        monday: "3:00p - 8:00p",
        tuesday: "3:00p - 8:00p",
        wednesday: "11:00a - 8:00p",
        thursday: "11:00a - 8:00p",
        friday: "11:00a - 8:30p",
        saturday: "11:00a - 8:30p"
    }
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState
});

export default restaurantSlice.reducer;