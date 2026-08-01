"use client";

import type { Goal } from "@/types";
import { useGoalStore } from "@/store";

export function useCreateGoal() {
  const addGoal = useGoalStore(
    (state) => state.addGoal
  );

  function createGoal(goal: Goal) {
    addGoal(goal);
  }

  return {
    createGoal,
  };
}