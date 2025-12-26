import { useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Hook to automatically track scenario views for authenticated users
 * @param scenarioId - Unique identifier for the scenario (e.g., "wti-crude-oil")
 * @param scenarioTitle - Human-readable title (e.g., "WTI Crude Oil Analysis")
 */
export function useTrackScenarioView(scenarioId: string, scenarioTitle: string) {
  const { user } = useAuth();
  const trackMutation = trpc.activity.trackScenarioView.useMutation();

  useEffect(() => {
    // Only track for authenticated users
    if (user && scenarioId && scenarioTitle) {
      // Track after a short delay to ensure the user actually viewed the page
      const timer = setTimeout(() => {
        trackMutation.mutate({
          scenarioId,
          scenarioTitle,
        });
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, [user, scenarioId, scenarioTitle]); // Only track once per page load

  return null;
}
