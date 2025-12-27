/**
 * Paywall Helper Functions
 * 
 * Utilities for truncating and gating scenario content based on user subscription tier.
 */

/**
 * Truncate text to specified character limit with ellipsis
 * 
 * @param text - Full text content
 * @param maxChars - Maximum characters to show (default: 350)
 * @returns Truncated text with ellipsis
 */
export function truncateText(text: string, maxChars: number = 350): string {
  if (text.length <= maxChars) return text;
  
  // Find the last complete sentence within the limit
  const truncated = text.substring(0, maxChars);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastQuestion = truncated.lastIndexOf('?');
  const lastExclamation = truncated.lastIndexOf('!');
  
  const lastSentenceEnd = Math.max(lastPeriod, lastQuestion, lastExclamation);
  
  if (lastSentenceEnd > 0 && lastSentenceEnd > maxChars * 0.7) {
    // If we found a sentence ending in the last 30% of the limit, use it
    return text.substring(0, lastSentenceEnd + 1);
  }
  
  // Otherwise, truncate at word boundary and add ellipsis
  const lastSpace = truncated.lastIndexOf(' ');
  return text.substring(0, lastSpace > 0 ? lastSpace : maxChars) + '…';
}

/**
 * Check if user has access to full scenario content
 * 
 * @param userRole - User's role from database
 * @returns true if user should see paywall, false if they have full access
 */
export function isContentLocked(userRole?: string): boolean {
  if (!userRole) return true; // No user = locked
  
  const unlockedRoles = ['core', 'pro', 'admin'];
  return !unlockedRoles.includes(userRole);
}

/**
 * Get first N sentences from text
 * 
 * @param text - Full text content
 * @param sentenceCount - Number of sentences to extract (default: 2)
 * @returns First N sentences
 */
export function getFirstSentences(text: string, sentenceCount: number = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  
  if (sentences.length <= sentenceCount) return text;
  
  return sentences.slice(0, sentenceCount).join(' ');
}
