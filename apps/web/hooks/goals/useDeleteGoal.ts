"use client";

import { useGoalStore } from "@/store";

export function useDeleteGoal() {
  const removeGoal = useGoalStore((state) => state.removeGoal);

  function deleteGoal(id: string) {
    removeGoal(id);
  }

  return {
    deleteGoal,
  };
}
