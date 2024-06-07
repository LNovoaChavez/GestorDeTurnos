import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserAppointment = createAsyncThunk(
    "appointments/fetchUserAppointment",
    async (userId, thunkAPI) => {
        const response = await axios.get(`http://localhost:3000/users/${userId}`)
        return response.data.appointments
    }
);

const appointmentSlice = createSlice({
    name: "appointments",
    initialState: [],
    reducers: {
        clearAppointments: (state) => {
            state.appointments = []
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUserAppointment.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export const {clearAppointments} = appointmentSlice.actions;
export default appointmentSlice.reducer