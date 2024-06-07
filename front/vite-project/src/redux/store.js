import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userSlice from "./userSlice.js"
import userAppointmentSlice from "./userAppointmentSlice.js"

const store = configureStore({
    reducer: {
        user: userSlice,
        userAppointments: userAppointmentSlice

    }
}
)

export default store