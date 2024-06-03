import { createSlice } from '@reduxjs/toolkit';
import { ScaleBarSchema } from '../types/scaleBar';

const initialState: ScaleBarSchema = {
    progress: {
        current: 0,
        max: 12,
    },
};

const scaleBarSlice = createSlice({
    name: 'scaleBar',
    initialState,
    reducers: {
        addScale: (state) => {
            state.progress.current += 1;
        },
    },
});

export const { actions: scaleBarActions } = scaleBarSlice;
export const { reducer: scaleBarReducer } = scaleBarSlice;
