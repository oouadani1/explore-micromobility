# Explore Micromobility Technical Workflow

This document is for hosting, walkthrough, and knowledge transfer. It describes how the app works today, where the main logic lives, how scoring is calculated, and which areas are easiest to update if the structure, wording, or recommendations change.

## 1. What This App Is

Explore Micromobility is a static front-end app. There is no backend, database, build step, or API.

Main files:

- [index.html](/Users/oo/Desktop/explore-micromobility/index.html): page shell, landing page markup, live regions, main containers
- [styles.css](/Users/oo/Desktop/explore-micromobility/styles.css): all visual styling, layout, and accessibility-focused visual states
- [script.js](/Users/oo/Desktop/explore-micromobility/script.js): app state, question flow, scoring, results rendering, disclosures, accessibility behavior
- [translations.js](/Users/oo/Desktop/explore-micromobility/translations.js): Spanish UI strings and localized device content overrides

The entire runtime is driven by `script.js`.

## 2. High-Level Workflow

The user flow is:

1. Landing page loads.
2. User chooses a language if needed.
3. User selects `Start exploring`.
4. The app shows one question at a time.
5. The app saves answers locally in memory only.
6. When the last question is submitted, the app normalizes the answers, calculates scores, sorts device options, and renders results.
7. The results page shows:
   - the top recommendations
   - explanation copy for the current recommendation
   - an accordion that explains the scoring workflow
   - other possible micromobility options
   - print and reset actions

Important current behavior:

- The app no longer auto-advances on radio selection.
- Users must select an answer and then use `Next` or `Explore results`.
- `Start over` returns to the landing page.

## 3. Runtime State

Current app state is stored in `APP_STATE` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1204).

Main fields:

- `hasStarted`: whether the user has moved past landing
- `currentStep`: current question index within the active question sequence
- `answers`: raw answers keyed by question id
- `locale`: `en` or `es`
- `currentResultIndex`: current recommendation card in the results carousel
- `allResultsPanelOpen`: whether the “other possible options” disclosure is open
- `resultsMethodologyOpen`: whether the methodology disclosure is open
- `currentRecommendations`: currently rendered top-level recommendations
- `currentAllRecommendations`: full sorted recommendation list
- `currentNormalizedAnswers`: normalized scoring answers
- `currentScores`: final device scores after overrides
- `currentPathway`: active pathway used for the current results

The app does not persist state across page reloads.

## 4. Question Workflow

Question metadata lives in `QUESTIONS` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1105).

Question ids:

- `pathway`
- `ageInput`
- `adaptiveNeed`
- `primaryUse`
- `transitLink`
- `carryChildren`
- `distance`
- `routeType`
- `storage`

The active question sequence is not fixed. It is built by `getVisibleQuestionKeys()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:4191).

Current branching rules:

- `exploring` pathway:
  - shows only `pathway`
  - goes straight to results
- all other pathways:
  - always show `pathway`, `ageInput`, `adaptiveNeed`, `primaryUse`, `distance`, `routeType`, `storage`
  - show `transitLink` only when `primaryUse === "transport"`
  - show `carryChildren` for `myself` and `someoneElse`
  - do not show `carryChildren` for `child`

Practical question counts:

- `myself` / `someoneElse`:
  - 8 questions normally
  - 9 if `primaryUse = transport`
- `child`:
  - 7 questions normally
  - 8 if `primaryUse = transport`
- `exploring`:
  - 1 question

Pathway-specific wording is handled by `getQuestionLabelForPathway()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1782).

Special question behavior:

- `ageInput` is rendered as a text input with numeric input mode, not a spinner.
- In the `child` pathway, `primaryUse = deliveries` is hidden unless the entered age is 18 or older. This logic is in `getRenderedQuestionOptions()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3678).

## 5. Navigation Workflow

Main UI render functions:

- `renderLandingScreen()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3808)
- `renderQuestion()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3850)
- `submitCurrentAnswers()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3652)
- `renderRecommendations()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3325)
- `renderCurrentRecommendationPage()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3369)

Button handlers:

- `handleNext()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:4107)
- `handleBack()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:4129)

Results actions:

- `Go back` returns the user to questions without clearing answers
- `Start over` clears state and returns to landing
- `Print results` calls `window.print()`

## 6. Scoring Workflow

### 6.1 Outputs

The app currently scores 8 outputs, defined in `OUTPUTS` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1):

- `bicycle`
- `ebike`
- `escooter`
- `lowSpeedPoweredMicromobility`
- `cargoBike`
- `bikeshare`
- `adaptiveMobility`
- `humanPoweredYouth`

### 6.2 Score Pipeline

The scoring process is:

1. Raw answers are normalized by `normalizeAnswers()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1684).
2. `ageInput` is converted into an age bracket:
   - `age3to13`
   - `age14to16`
   - `age17to49`
   - `age50plus`
3. `calculateScores()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1719) starts all devices at `0`.
4. For each normalized answer, the app looks up the matching rule block in `SCORING_RULES`.
5. Nonzero points are added to device totals.
6. `applyOverrides()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1604) then applies hard visibility and ranking rules.
7. `getSortedRecommendations()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1734) sorts remaining finite scores high to low.
8. Placement helpers then adjust rank for special cases:
   - `enforceCargoBikePlacement()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1655)
   - `enforceAdaptiveMobilityPlacement()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1669)

### 6.3 Point Range

The scoring model is intentionally simple:

- most direct answer-based point changes are between `-3` and `+3`
- the strongest normal positive boost is `+3`
- the age 3 to 13 youth rule gives `humanPoweredYouth +10`
- hard overrides use:
  - `-Infinity` to hide an option
  - `999` and `1000` to force youth/adaptive priority in specific cases

### 6.4 Scoring Parameters

The exact score map is defined in `SCORING_RULES` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:792). The table below lists only nonzero changes. Any omitted device gets `0` for that answer.

#### Age

- `age3to13`: `humanPoweredYouth +10`
- `age14to16`: `bicycle +2`, `ebike +1`
- `age50plus`: `ebike +1`, `adaptiveMobility +3`

#### Adaptive need

- `yes`: `bicycle +1`, `ebike +1`, `cargoBike +1`, `adaptiveMobility +3`

#### Primary use

- `transport`: `bicycle +1`, `ebike +2`, `escooter +2`, `lowSpeedPoweredMicromobility +1`, `cargoBike +1`, `bikeshare +2`
- `deliveries`: `bicycle +1`, `ebike +3`, `cargoBike +3`
- `recreation`: `bicycle +3`, `ebike +1`, `escooter +1`, `lowSpeedPoweredMicromobility +1`, `adaptiveMobility +2`, `bikeshare +1`

#### Transit connection

- `yes`: `bicycle +1`, `ebike +1`, `escooter +2`, `lowSpeedPoweredMicromobility +1`, `bikeshare +2`

#### Carrying children

- `yes`: `bicycle +1`, `ebike +1`, `cargoBike +3`, `adaptiveMobility +1`

#### Distance

- `under3`: `bicycle +2`, `escooter +2`, `lowSpeedPoweredMicromobility +2`, `cargoBike +1`, `adaptiveMobility +1`, `bikeshare +2`
- `3to9`: `bicycle +1`, `ebike +2`, `escooter +1`, `cargoBike +2`, `adaptiveMobility +1`, `bikeshare +1`
- `10plus`: `bicycle +1`, `ebike +2`, `cargoBike +2`, `adaptiveMobility +1`

#### Route type

- `bikeLanes`: `bicycle +1`, `ebike +1`, `escooter +1`, `lowSpeedPoweredMicromobility +1`, `cargoBike +1`, `adaptiveMobility +1`, `bikeshare +1`
- `mixedRoads`: `escooter -2`, `lowSpeedPoweredMicromobility -3`
- `regularRoads`: `ebike +1`, `lowSpeedPoweredMicromobility -3`, `cargoBike +2`
- `trails`: `bicycle +2`, `ebike +1`, `lowSpeedPoweredMicromobility +1`, `adaptiveMobility +1`

#### Storage

- `indoor`: `bicycle +1`, `ebike +1`, `escooter +1`, `lowSpeedPoweredMicromobility +2`, `adaptiveMobility -1`, `bikeshare +1`
- `outdoor`: `bicycle +2`, `ebike +1`, `escooter +1`, `bikeshare +2`

### 6.5 Hard Overrides

After additive scoring, the app applies hard rules in `applyOverrides()`:

- `exploring` pathway:
  - no visibility overrides are applied
- `age3to13`:
  - hides all adult-oriented devices
  - sets `humanPoweredYouth = 999`
  - if `adaptiveNeed = yes`, sets `adaptiveMobility = 1000`
- `age14to16`:
  - hides `escooter`, `lowSpeedPoweredMicromobility`, `bikeshare`
- `age50plus`:
  - hides `escooter`, `lowSpeedPoweredMicromobility`
- `carryChildren = yes`:
  - hides `escooter`, `lowSpeedPoweredMicromobility`
- `routeType = regularRoads` or `trails`:
  - hides `escooter`
- `routeType` not `bikeLanes` or `trails`:
  - hides `lowSpeedPoweredMicromobility`
- `distance` not `under3`:
  - hides `lowSpeedPoweredMicromobility`
- `storage` not `indoor`:
  - hides `lowSpeedPoweredMicromobility`
- `storage = indoor`:
  - subtracts `1` from `cargoBike`

### 6.6 Ranking Rules After Scoring

Two extra placement rules are applied after sorting:

- if `carryChildren = yes`, move `cargoBike` to at least position 2
- if `adaptiveNeed = yes`, move `adaptiveMobility` to position 1

These are ranking adjustments, not new points.

### 6.7 Results Selection

- Standard pathways:
  - the results page shows the top 2 finite-score recommendations
- `exploring` pathway:
  - the results page shows all finite-score recommendations
- The `Other possible micromobility options` disclosure shows additional positive-score results after the top 2

## 7. Recommendation Content Workflow

Recommendation content is stored in `DEVICE_CONTENT` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:85).

Each device can define:

- `image`
- `cost`
- `whyBase`
- `whyConditional`
- `considerBase`
- `considerConditional`
- `nextSteps`

Localized device content can override the English defaults through `I18N.deviceContent` in [translations.js](/Users/oo/Desktop/explore-micromobility/translations.js).

Merge behavior lives in `getDeviceContent()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1015).

### 7.1 Why Text Assembly

The main rationale paragraph is assembled from:

- `whyBase`
- matching conditional fragments selected by answer state

Helpers:

- `getWhyBase()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1044)
- `getWhyConditional()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1060)
- `WHY_CONDITIONAL_KEY_MAP` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1048)

Conditional fragment slots currently supported in content:

- age:
  - `age3to13`
  - `age14to16`
  - `age17to49`
  - `age50plus`
- mobility:
  - `adaptiveNeedYes`
  - `adaptiveNeedNo`
- use:
  - `transport`
  - `deliveries`
  - `recreation`
- transit:
  - `transitLinkYes`
  - `transitLinkNo`
- children:
  - `carryChildrenYes`
  - `carryChildrenNo`
- distance:
  - `distanceUnder3`
  - `distance3to9`
  - `distance10plus`
- route:
  - `routeBikeLanes`
  - `routeMixedRoads`
  - `routeRegularRoads`
  - `routeTrails`
- storage:
  - `storageIndoor`
  - `storageOutdoor`
  - `storageNotMajorConcern`

### 7.2 Guidance Text Assembly

The “What to know about this option” section uses:

- `considerBase`
- matching `considerConditional` fragments

Helpers:

- `getConsiderBase()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1071)
- `getConsiderConditionalValue()` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1088)
- `CONSIDER_CONDITIONAL_KEY_MAP` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1075)

### 7.3 Explore-All Copy

The `exploring` pathway does not use the normal recommendation explanation assembly. It uses `EXPLORE_REASON_TEXT` in [script.js](/Users/oo/Desktop/explore-micromobility/script.js:773).

That pathway also skips the results methodology accordion.

## 8. Results Page Workflow

Results rendering starts in `renderRecommendations()` and then `renderCurrentRecommendationPage()`.

Current results page components:

- main recommendation card
- recommendation image and alt text
- “What to know about this option”
- “More resources for this option”
- `How Explore Micromobility shows options` accordion
- `Other possible micromobility options` disclosure
- results pager
- `Go back`, `Start over`, and `Print results`
- footer disclaimer and feedback prompt

Supporting helpers:

- rationale text: `getRecommendationReason()`
- methodology accordion: `renderResultsMethodology()`
- disclosure panel of additional devices: `renderAllDeviceResultsPanel()`
- print summary: `renderPrintSummary()`

## 9. Localization Workflow

Current locale support:

- English defaults live mostly in `script.js`
- Spanish overrides live in `translations.js`

Localization touchpoints:

- UI labels: `window.MICROMOBILITY_TRANSLATIONS.ui.es`
- output labels: `window.MICROMOBILITY_TRANSLATIONS.outputs.es`
- device content overrides: `window.MICROMOBILITY_TRANSLATIONS.deviceContent.es`

If English copy changes in `script.js`, Spanish often needs a parallel update in `translations.js`.

## 10. Accessibility Workflow

Key accessibility behaviors already implemented:

- landing page and results states are semantically separated
- question number is included in the accessible question label before the question text
- question errors are announced through a persistent live region
- route images use null alt text where the image is decorative
- results and disclosures use button-based disclosure controls
- results page has a stable focus target and clearer reading order than earlier versions
- the final question action is a text button, not only an arrow

Main accessibility-related render logic lives in:

- `renderQuestion()`
- `showStepError()`
- `clearStepError()`
- `renderCurrentRecommendationPage()`

## 11. Fast Update Guide

If you need to update the app quickly, use this map:

- change landing page copy:
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:39)
  - [index.html](/Users/oo/Desktop/explore-micromobility/index.html:25)
- change question wording:
  - `QUESTIONS`
  - `getQuestionLabelForPathway()`
  - Spanish strings in `translations.js`
- change question branching:
  - `getVisibleQuestionKeys()`
  - `getCurrentSequence()`
- change answer validation:
  - `saveCurrentStepValue()`
- change scoring weights:
  - `SCORING_RULES`
- change hard hide/show rules:
  - `applyOverrides()`
- change forced ranking:
  - `enforceCargoBikePlacement()`
  - `enforceAdaptiveMobilityPlacement()`
- change recommendation narrative:
  - `DEVICE_CONTENT`
  - localized overrides in `translations.js`
- change explore-all rationale:
  - `EXPLORE_REASON_TEXT`
- change accordion explanation:
  - results methodology constants and `renderResultsMethodology()`
- change results labels or buttons:
  - `renderCurrentRecommendationPage()`
  - locale strings in `translations.js`

## 12. Gaps and Improvement Targets

These are concrete issues worth targeting next.

### 12.1 Content and documentation drift

- The current landing copy and README still say answers automatically open the next question, but the app now requires `Next` after selecting a radio answer.
- Files:
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:38)
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:44)
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:50)
  - [README.md](/Users/oo/Desktop/explore-micromobility/README.md:1)

### 12.2 Monolithic script structure

- `script.js` currently mixes:
  - content
  - scoring rules
  - localization fallback logic
  - DOM rendering
  - accessibility behavior
  - event handling
- This makes changes riskier and slower to review.
- A future refactor should split:
  - content/config
  - scoring logic
  - rendering
  - accessibility helpers
  - event wiring

### 12.3 Inline styles in runtime HTML

- Some question markup still uses inline styles for spacing and the age input.
- This makes visual maintenance harder and spreads style logic between CSS and JS.
- File:
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3915)
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:3936)

### 12.4 Debug logging remains in production flow

- `submitCurrentAnswers()` still prints question rows, normalized answers, scores, and final rankings to the browser console.
- This is useful during development, but may not be desirable in production or public demos.
- File:
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:1499)

### 12.5 Content cleanup issues inside device copy

- There is at least one duplicated object key:
  - `ebike.considerConditional.recreation` appears twice
- There are also visible typos in recommendation copy:
  - `similiar`
  - `comofortable`
- Files:
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:213)
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:204)
  - [script.js](/Users/oo/Desktop/explore-micromobility/script.js:230)

### 12.6 Known copy contamination risk

- Some older bicycle/adaptive wording has looked copy-shifted during past accessibility work. The content block structure makes this easy to miss because many fragments are conditional and only show in certain answer combinations.
- Any future copy QA should test:
  - bicycle
  - adaptive cycles
  - child path
  - explore-all path

### 12.7 No automated test layer

- There is currently no automated test suite for:
  - score calculation
  - pathway branching
  - recommendation ordering
  - accessibility regressions
- The most valuable lightweight next step would be small deterministic tests for:
  - `normalizeAnswers()`
  - `calculateScores()`
  - `applyOverrides()`
  - `getVisibleQuestionKeys()`

## 13. Recommended Handoff Focus

For a hosting or maintenance walkthrough, the most useful live walkthrough order is:

1. page structure and file map
2. landing → question → results flow
3. branching logic in `getVisibleQuestionKeys()`
4. score pipeline:
   - normalize
   - additive scoring
   - overrides
   - ranking
5. recommendation content assembly
6. Spanish/localization overrides
7. accessibility features
8. known cleanup targets

That sequence matches how a maintainer will most likely need to reason about the app in real use.
