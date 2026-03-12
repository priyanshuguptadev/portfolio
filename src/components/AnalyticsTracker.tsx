import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TrackPageView } from "../utils/trackPage";

export default function AnalyticsTracker() {
  const { pathname } = useLocation();
  // Track page view
  useEffect(() => {
    TrackPageView(pathname);
  }, [pathname]);

  return null; // This component does not render anything
}
