import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EthKeyService from "../services/EthKeyService";

interface EthKeysState {
    publicKey: string;
    privateKey: string;
    loading: boolean;
    error: string | null;
}

const initialState: EthKeysState = {
    publicKey: "",
    privateKey: "",
    loading: false,
    error: null,
};

export const loadKeys = createAsyncThunk("ethKeys/loadKeys", async () => {
    const savedKeys = await EthKeyService.loadKeys();
    return savedKeys || { publicKey: "", privateKey: "" };
});

export const generateKeys = createAsyncThunk("ethKeys/generateKeys", async () => {
    await EthKeyService.generateAndSaveKeys();
    return await EthKeyService.loadKeys();
});

const ethKeysSlice = createSlice({
    name: "ethKeys",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadKeys.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadKeys.fulfilled, (state, action) => {
                state.publicKey = action.payload.publicKey;
                state.privateKey = action.payload.privateKey;
                state.loading = false;
            })
            .addCase(loadKeys.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load keys";
            })
            .addCase(generateKeys.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(generateKeys.fulfilled, (state, action) => {
                if (!action.payload) return;
                state.publicKey = action.payload.publicKey;
                state.privateKey = action.payload.privateKey;
                state.loading = false;
            })
            .addCase(generateKeys.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to generate keys";
            });
    },
});

export default ethKeysSlice.reducer;