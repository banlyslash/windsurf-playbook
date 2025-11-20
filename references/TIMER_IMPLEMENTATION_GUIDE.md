# Timer Implementation Guide for ThreadedQuiz Component

## Overview
This document outlines the approach for adding a timer feature to the ThreadedQuiz component used in the Windsurf Playbook documentation site.

## Feasibility
✅ **Fully feasible** - Can be implemented with React hooks and standard JavaScript timing functions.

---

## Implementation Approach

### 1. Timer Types (Choose One or Multiple)

#### Option A: Elapsed Time Timer (Recommended for MVP)
- Counts total time from quiz start to finish
- Simple and non-intrusive
- Good for tracking performance without pressure

#### Option B: Per-Question Timer
- Tracks time spent on each individual question
- Useful for detailed analytics
- Shows which questions take longest

#### Option C: Countdown Timer
- Set a time limit (e.g., 30 minutes) with auto-submit
- Creates time pressure (good for assessments)
- Includes warnings when time is running low

---

### 2. Technical Implementation

#### State Management
```typescript
// Add to ThreadedQuiz component state
const [startTime, setStartTime] = useState<number | null>(null);
const [elapsedTime, setElapsedTime] = useState(0);
const [isTimerRunning, setIsTimerRunning] = useState(false);
const [questionStartTimes, setQuestionStartTimes] = useState<number[]>([]);
```

#### Timer Logic with useEffect
```typescript
useEffect(() => {
  let interval: NodeJS.Timeout;
  
  if (isTimerRunning && !showResults) {
    interval = setInterval(() => {
      setElapsedTime(Date.now() - (startTime || Date.now()));
    }, 1000); // Update every second
  }
  
  return () => {
    if (interval) clearInterval(interval);
  };
}, [isTimerRunning, showResults, startTime]);
```

#### Start Timer
```typescript
// Start timer when quiz begins (in component mount or first interaction)
useEffect(() => {
  if (!startTime && currentQuestion === 0) {
    setStartTime(Date.now());
    setIsTimerRunning(true);
  }
}, [currentQuestion]);
```

#### Stop Timer
```typescript
// Stop timer when showing results
useEffect(() => {
  if (showResults) {
    setIsTimerRunning(false);
  }
}, [showResults]);
```

---

### 3. Props to Add

```typescript
interface ThreadedQuizProps {
  questions: QuizQuestion[];
  title?: string;
  showCategories?: boolean;
  randomize?: boolean;
  maxQuestions?: number;
  hideCheckAnswer?: boolean;
  
  // New timer props
  enableTimer?: boolean;           // Enable/disable timer feature
  timerMode?: 'elapsed' | 'countdown' | 'per-question';
  timeLimit?: number;              // Time limit in seconds (for countdown mode)
  showTimer?: boolean;             // Show/hide timer display
  timerPosition?: 'header' | 'floating' | 'separate';
  onTimeExpired?: () => void;      // Callback when countdown reaches 0
}
```

---

### 4. UI Placement Options

#### Option A: In Question Header (Recommended)
```tsx
<div className={styles.questionHeader}>
  <span className={styles.questionNumber}>
    Question {currentQuestion + 1} of {displayedQuestions.length}
    {enableTimer && showTimer && (
      <span className={styles.timer}>
        ⏱️ {formatTime(elapsedTime)}
      </span>
    )}
  </span>
  {/* Progress bar */}
</div>
```

**Pros:**
- Integrates naturally with existing UI
- Doesn't take extra space
- Always visible

#### Option B: Separate Timer Bar
```tsx
{enableTimer && showTimer && (
  <div className={styles.timerBar}>
    <span>Time Elapsed: {formatTime(elapsedTime)}</span>
    {timeLimit && (
      <span>Remaining: {formatTime(timeLimit - elapsedTime)}</span>
    )}
  </div>
)}
```

**Pros:**
- More prominent
- Can show additional info (remaining time, warnings)
- Better for countdown mode

#### Option C: Floating Timer
```tsx
{enableTimer && showTimer && (
  <div className={styles.floatingTimer}>
    ⏱️ {formatTime(elapsedTime)}
  </div>
)}
```

**Pros:**
- Always visible while scrolling
- Doesn't interfere with question layout
- Good for long questions

---

### 5. Helper Functions

#### Format Time Display
```typescript
const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
```

#### Calculate Time Statistics
```typescript
const calculateTimeStats = () => {
  const totalTime = elapsedTime;
  const avgTimePerQuestion = totalTime / displayedQuestions.length;
  
  return {
    totalTime,
    avgTimePerQuestion,
    formattedTotal: formatTime(totalTime),
    formattedAverage: formatTime(avgTimePerQuestion)
  };
};
```

---

### 6. Results Display Enhancement

```tsx
<div className={styles.resultsContainer}>
  <h3 className={styles.resultsTitle}>Quiz Results</h3>
  
  <div className={styles.scoreContainer}>
    <p className={styles.score}>
      You scored {score} out of {displayedQuestions.length}
      <span className={styles.percentage}>
        ({Math.round((score / displayedQuestions.length) * 100)}%)
      </span>
    </p>
    
    {enableTimer && (
      <div className={styles.timeStats}>
        <p>⏱️ Total Time: {formatTime(elapsedTime)}</p>
        <p>📊 Average per Question: {formatTime(elapsedTime / displayedQuestions.length)}</p>
      </div>
    )}
  </div>
  
  {/* Category scores... */}
</div>
```

---

### 7. CSS Styling

#### New CSS Classes Needed

```css
/* Timer display in header */
.timer {
  margin-left: 1rem;
  padding: 0.2rem 0.5rem;
  background-color: var(--ifm-color-emphasis-200);
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: monospace;
}

/* Separate timer bar */
.timerBar {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: var(--ifm-color-emphasis-100);
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: 500;
}

/* Warning state (when time is running low) */
.timerWarning {
  background-color: #fff3cd;
  color: #856404;
  animation: pulse 1s infinite;
}

/* Expired state */
.timerExpired {
  background-color: #f8d7da;
  color: #721c24;
}

/* Floating timer */
.floatingTimer {
  position: fixed;
  top: 80px;
  right: 20px;
  padding: 0.5rem 1rem;
  background-color: var(--ifm-background-color);
  border: 2px solid var(--ifm-color-primary);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-weight: bold;
  z-index: 100;
}

/* Time statistics in results */
.timeStats {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--ifm-color-emphasis-300);
}

.timeStats p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

/* Pulse animation for warnings */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

---

### 8. Advanced Features (Optional)

#### Auto-Submit on Time Expiry
```typescript
useEffect(() => {
  if (timerMode === 'countdown' && timeLimit) {
    if (elapsedTime >= timeLimit * 1000) {
      setIsTimerRunning(false);
      setShowResults(true);
      if (onTimeExpired) onTimeExpired();
    }
  }
}, [elapsedTime, timeLimit, timerMode]);
```

#### Time Warnings
```typescript
const getTimerClass = () => {
  if (timerMode !== 'countdown' || !timeLimit) return styles.timer;
  
  const remaining = timeLimit * 1000 - elapsedTime;
  const fiveMinutes = 5 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  if (remaining <= 0) return `${styles.timer} ${styles.timerExpired}`;
  if (remaining <= oneMinute) return `${styles.timer} ${styles.timerWarning}`;
  if (remaining <= fiveMinutes) return `${styles.timer} ${styles.timerWarning}`;
  
  return styles.timer;
};
```

#### Per-Question Timing
```typescript
// Track time per question
const [questionTimes, setQuestionTimes] = useState<number[]>([]);
const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());

// When moving to next question
const handleNext = () => {
  const timeSpent = Date.now() - questionStartTime;
  setQuestionTimes([...questionTimes, timeSpent]);
  setQuestionStartTime(Date.now());
  
  // ... rest of handleNext logic
};

// Display in results
{showCategories && (
  <div className={styles.questionTimings}>
    <h4>Time per Question:</h4>
    <ul>
      {questionTimes.map((time, index) => (
        <li key={index}>
          Question {index + 1}: {formatTime(time)}
        </li>
      ))}
    </ul>
  </div>
)}
```

#### Persistent Timer (Survives Page Refresh)
```typescript
// Save to localStorage
useEffect(() => {
  if (enableTimer && startTime) {
    localStorage.setItem('quizTimerStart', startTime.toString());
    localStorage.setItem('quizTimerElapsed', elapsedTime.toString());
  }
}, [startTime, elapsedTime]);

// Restore from localStorage
useEffect(() => {
  const savedStart = localStorage.getItem('quizTimerStart');
  const savedElapsed = localStorage.getItem('quizTimerElapsed');
  
  if (savedStart && savedElapsed) {
    setStartTime(parseInt(savedStart));
    setElapsedTime(parseInt(savedElapsed));
    setIsTimerRunning(true);
  }
}, []);

// Clear on quiz completion
const handleReset = () => {
  localStorage.removeItem('quizTimerStart');
  localStorage.removeItem('quizTimerElapsed');
  // ... rest of reset logic
};
```

---

### 9. MDX Integration

#### Basic Usage
```jsx
<ThreadedQuiz 
  title="Windsurf Basic Concepts Assessment" 
  showCategories={true}
  randomize={true}
  maxQuestions={36}
  hideCheckAnswer={true}
  enableTimer={true}
  showTimer={true}
  questions={[...]}
/>
```

#### With Countdown Timer
```jsx
<ThreadedQuiz 
  title="Windsurf Advanced Scenarios Assessment" 
  showCategories={true}
  randomize={true}
  maxQuestions={36}
  hideCheckAnswer={true}
  enableTimer={true}
  timerMode="countdown"
  timeLimit={1800}  // 30 minutes
  showTimer={true}
  questions={[...]}
/>
```

#### Update MDXComponents.tsx
```typescript
interface MDXThreadedQuizProps {
  title?: string;
  questions: (QuizQuestion & { category?: string })[];
  showCategories?: boolean;
  randomize?: boolean;
  maxQuestions?: number;
  hideCheckAnswer?: boolean;
  enableTimer?: boolean;
  timerMode?: 'elapsed' | 'countdown' | 'per-question';
  timeLimit?: number;
  showTimer?: boolean;
}

export function MDXThreadedQuiz({ 
  title, 
  questions, 
  showCategories, 
  randomize, 
  maxQuestions, 
  hideCheckAnswer,
  enableTimer,
  timerMode,
  timeLimit,
  showTimer
}: MDXThreadedQuizProps): React.ReactElement {
  return (
    <ThreadedQuiz 
      title={title} 
      questions={questions} 
      showCategories={showCategories} 
      randomize={randomize} 
      maxQuestions={maxQuestions} 
      hideCheckAnswer={hideCheckAnswer}
      enableTimer={enableTimer}
      timerMode={timerMode}
      timeLimit={timeLimit}
      showTimer={showTimer}
    />
  );
}
```

---

### 10. Complexity Assessment

| Feature | Complexity | Estimated Lines of Code | Time Estimate |
|---------|-----------|------------------------|---------------|
| Basic elapsed timer | ⭐ Easy | ~30 lines | 30 minutes |
| Timer display in header | ⭐ Easy | ~20 lines | 15 minutes |
| Time in results | ⭐ Easy | ~15 lines | 15 minutes |
| Countdown with auto-submit | ⭐⭐ Medium | ~60 lines | 1 hour |
| Time warnings | ⭐⭐ Medium | ~40 lines | 30 minutes |
| Per-question timing | ⭐⭐⭐ Complex | ~100 lines | 2 hours |
| Persistent timer | ⭐⭐⭐ Complex | ~50 lines | 1 hour |
| Floating timer UI | ⭐⭐ Medium | ~30 lines | 30 minutes |

---

### 11. Recommended Implementation Phases

#### Phase 1: MVP (Minimum Viable Product)
**Goal:** Basic elapsed time tracking
- ✅ Add elapsed time timer
- ✅ Display in question header
- ✅ Show total time in results
- ✅ Enable/disable via prop

**Estimated Time:** 1 hour

#### Phase 2: Enhanced Features
**Goal:** Better UX and more options
- ✅ Add countdown mode
- ✅ Time warnings (5 min, 1 min remaining)
- ✅ Auto-submit on time expiry
- ✅ Floating timer option

**Estimated Time:** 2 hours

#### Phase 3: Advanced Analytics
**Goal:** Detailed performance tracking
- ✅ Per-question timing
- ✅ Category-based time analysis
- ✅ Time statistics in results
- ✅ Export timing data

**Estimated Time:** 2-3 hours

#### Phase 4: Polish
**Goal:** Production-ready
- ✅ Persistent timer (localStorage)
- ✅ Pause/resume functionality
- ✅ Accessibility improvements
- ✅ Mobile responsive design

**Estimated Time:** 1-2 hours

---

### 12. Testing Considerations

#### Unit Tests
- Timer starts correctly
- Timer stops on quiz completion
- Time formatting is correct
- Countdown reaches zero and triggers auto-submit
- Timer persists across page refresh

#### Integration Tests
- Timer works with randomized questions
- Timer works with category filtering
- Timer resets correctly on retake
- Timer doesn't interfere with other features

#### Edge Cases
- Browser tab inactive (timer should pause or continue?)
- Multiple quiz instances on same page
- Very long quiz sessions (hours)
- Network interruptions
- Browser timezone changes

---

### 13. Accessibility Considerations

- Add ARIA labels for timer display
- Ensure timer doesn't distract screen readers
- Provide option to hide timer for users with anxiety
- Ensure color contrast for warning states
- Keyboard navigation shouldn't be affected

---

### 14. Performance Considerations

- Use `setInterval` with 1-second updates (not more frequent)
- Clean up intervals properly to prevent memory leaks
- Avoid re-renders on every timer tick
- Use `useMemo` for time calculations
- Consider debouncing localStorage updates

---

## Recommendation

**Start with Phase 1 (MVP)** - A simple elapsed time timer that:
1. ✅ Starts automatically when quiz begins
2. ✅ Displays in the question header (non-intrusive)
3. ✅ Shows total time in results
4. ✅ Can be enabled/disabled via `enableTimer` prop
5. ✅ Minimal code changes (~50 lines total)

This provides immediate value without over-complicating the component and can be enhanced incrementally based on user feedback.

---

## Next Steps

1. Review this implementation guide
2. Decide on which phase to implement
3. Create feature branch for timer implementation
4. Implement Phase 1 (MVP)
5. Test thoroughly
6. Deploy and gather feedback
7. Iterate with Phase 2+ features as needed

---

## Related Files

- `/src/components/ThreadedQuiz/index.tsx` - Main component
- `/src/components/ThreadedQuiz/styles.module.css` - Styling
- `/src/components/MDXComponents.tsx` - MDX wrapper
- `/docs/assessment/quiz-mcq.md` - Assessment quiz 1
- `/docs/assessment/quiz-mcq-medium.md` - Assessment quiz 2
