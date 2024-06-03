import {StateSchema} from "app/providers/StoreProvider";

export const getScaleBar = (state: StateSchema) => state.scaleBar.progress;
