import { create } from "zustand";
import { createRecipesSlice, type RecipesSliceType } from "./recipesSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'
import {type  AISlice, createAISlice} from "./aiSlice";

export const useApppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))