import { useState, useEffect, useCallback } from "react";

interface BlogPreferences {
  bookmarkedPosts: number[];
  readPosts: number[];
  recentSearches: string[];
  isCollapsed: boolean;
  viewMode: "list" | "archive";
}

const STORAGE_KEY = "blog-preferences";
const MAX_RECENT_SEARCHES = 5;

const defaultPreferences: BlogPreferences = {
  bookmarkedPosts: [],
  readPosts: [],
  recentSearches: [],
  isCollapsed: false,
  viewMode: "list",
};

export const useBlogPreferences = () => {
  const [preferences, setPreferences] = useState<BlogPreferences>(() => {
    if (typeof window === "undefined") return defaultPreferences;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultPreferences, ...JSON.parse(stored) } : defaultPreferences;
    } catch {
      return defaultPreferences;
    }
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (e) {
      console.error("Failed to save blog preferences:", e);
    }
  }, [preferences]);

  // Bookmark toggle
  const toggleBookmark = useCallback((postId: number) => {
    setPreferences((prev) => ({
      ...prev,
      bookmarkedPosts: prev.bookmarkedPosts.includes(postId)
        ? prev.bookmarkedPosts.filter((id) => id !== postId)
        : [...prev.bookmarkedPosts, postId],
    }));
  }, []);

  // Mark post as read
  const markAsRead = useCallback((postId: number) => {
    setPreferences((prev) => ({
      ...prev,
      readPosts: prev.readPosts.includes(postId)
        ? prev.readPosts
        : [...prev.readPosts, postId],
    }));
  }, []);

  // Add search to recent
  const addRecentSearch = useCallback((term: string) => {
    if (!term.trim()) return;
    setPreferences((prev) => {
      const filtered = prev.recentSearches.filter(
        (s) => s.toLowerCase() !== term.toLowerCase()
      );
      return {
        ...prev,
        recentSearches: [term, ...filtered].slice(0, MAX_RECENT_SEARCHES),
      };
    });
  }, []);

  // Clear search history
  const clearSearchHistory = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      recentSearches: [],
    }));
  }, []);

  // Toggle sidebar collapse
  const toggleCollapsed = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      isCollapsed: !prev.isCollapsed,
    }));
  }, []);

  // Set view mode
  const setViewMode = useCallback((mode: "list" | "archive") => {
    setPreferences((prev) => ({
      ...prev,
      viewMode: mode,
    }));
  }, []);

  return {
    bookmarkedPosts: preferences.bookmarkedPosts,
    readPosts: preferences.readPosts,
    recentSearches: preferences.recentSearches,
    isCollapsed: preferences.isCollapsed,
    viewMode: preferences.viewMode,
    toggleBookmark,
    markAsRead,
    addRecentSearch,
    clearSearchHistory,
    toggleCollapsed,
    setViewMode,
  };
};
