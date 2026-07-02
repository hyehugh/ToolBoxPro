#!/usr/bin/env python3
"""
Final deduplication pass: replace 5 shared paragraph patterns across 42 tool guides
with unique, tool-specific text. Each replacement is unique per tool.
"""
import re

GUIDES_PATH = "lib/tools/guides.ts"

# ── Shared paragraph texts (exact) ──────────────────────────────────────────

SHARED_A = (
    "Writers, developers, and content creators frequently need to process text "
    "— counting words, converting case, checking diffs, or reformatting content. "
    "Desktop text editors lack these specialized features, and online alternatives "
    "often require signup or have usage limits. This tool provides unlimited, "
    "instant text processing with a clean, focused interface."
)

SHARED_B1 = (
    "Unit conversions are needed daily in cooking, engineering, travel, science, "
    "and everyday life. While your phone has a basic calculator, it rarely handles "
    "all the units you need. This tool provides comprehensive conversion support "
    "with instant results, making it easy to switch between measurement systems "
    "without memorizing conversion factors."
)

SHARED_B2 = (
    "Enter your value in the input field, select the source unit from the dropdown, "
    "and see the converted value in all other units simultaneously. No need to click "
    "a button — results update in real-time as you type. Use the swap button to "
    "reverse the conversion direction, or select a different unit from the "
    "comprehensive list."
)

SHARED_B3 = (
    "All calculations happen locally in your browser using JavaScript. No data is "
    "sent to any server. Your input values and conversion results stay completely "
    "private. No account, no signup, no cookies beyond essential functionality."
)

SHARED_C = (
    "Everyday tasks like generating passwords, creating QR codes, rolling dice, or "
    "checking BMI shouldn't require installing software or creating accounts. This "
    "tool provides a quick, reliable solution that works instantly in your browser. "
    "It's perfect for one-off tasks where you need a fast result without the "
    "overhead of specialized software."
)

# ── Unique replacements per tool ────────────────────────────────────────────

# GROUP A: 18 text tools — replaces SHARED_A
REPLACEMENTS_A = {
    "password-generator": (
        "Creating strong passwords manually is tedious and error-prone — people "
        "default to memorable patterns that are trivially crackable. This generator "
        "leverages the Web Crypto API's CSPRNG to produce truly random credentials "
        "that resist brute-force and dictionary attacks, filling a gap no built-in "
        "OS tool or password manager autofill can address on demand."
    ),
    "word-counter": (
        "Content platforms like Medium, Twitter, and academic submission portals "
        "enforce strict character and word limits, yet few editors display live "
        "counts prominently. Bloggers, students, and SEO copywriters need immediate "
        "feedback on document length — including sentences, paragraphs, and reading "
        "time — to meet submission requirements without repeatedly opening a full "
        "word processor."
    ),
    "case-converter": (
        "Formatting text casing correctly is a surprisingly common chore: converting "
        "SCREAMING_SNAKE_CASE constants to camelCase for JavaScript, fixing "
        "ALL-CAPS headlines, title-casing article headings, or preparing sentence "
        "case for email subjects. Most text editors only offer a single toggle, "
        "leaving developers and copywriters to retype or manually fix inconsistent "
        "casing across hundreds of lines."
    ),
    "lorem-ipsum-generator": (
        "Designers and front-end developers need realistic placeholder content to "
        "fill wireframes, prototype layouts, and demonstrate responsive behavior "
        "before real copy exists. Pasting the same \"Lorem ipsum dolor sit amet\" "
        "paragraph repeatedly looks unprofessional in client demos. Generating "
        "fresh, varied dummy text with adjustable paragraph counts saves time "
        "and produces more convincing mockups."
    ),
    "text-diff-checker": (
        "Spotting changes between two versions of a document by eye is slow and "
        "unreliable, especially across long contracts, configuration files, or "
        "revision-tracked manuscripts. A side-by-side visual diff highlights every "
        "insertion, deletion, and modification instantly, making it indispensable "
        "for contract review, plagiarism detection, and verifying that a "
        "round-tripped format conversion preserved all content faithfully."
    ),
    "text-repeater": (
        "Generating repeated strings programmatically saves time in scenarios "
        "ranging from test-data creation to decorative formatting. Whether you "
        "need 500 rows of sample CSV data, a border of asterisks for a comment "
        "header, or a concatenated query parameter list, manually copy-pasting "
        "is impractical. A configurable repeater with separator and prefix "
        "options handles these tasks in seconds."
    ),
    "text-to-binary": (
        "Translating between human-readable text and raw binary representation "
        "is a fundamental concept in computer science education, low-level "
        "debugging, and steganography puzzles. Students learning ASCII and UTF-8 "
        "encoding, developers inspecting protocol payloads, and CTF participants "
        "all need a reliable converter that handles multi-byte characters "
        "correctly — something calculators and standard text editors simply "
        "cannot do."
    ),
    "text-to-slug": (
        "Building SEO-friendly URLs requires transforming article titles into "
        "clean, lowercase, hyphen-separated slugs free of special characters "
        "and accents. Content management systems like WordPress auto-generate "
        "slugs, but when you are working outside a CMS — drafting redirects, "
        "configuring static-site routing, or bulk-renaming files — a dedicated "
        "slugifier normalizes text instantly and consistently."
    ),
    "text-sorter": (
        "Organizing unsorted lists — whether a jumbled export of email addresses, "
        "a backlog of task items, or genealogy records — into alphabetical or "
        "length-based order is a frequent data-cleaning step. Spreadsheet apps "
        "require import and column setup for what should be a one-second "
        "operation. Sorting lines directly, with options for case-insensitive "
        "and natural ordering, removes that friction entirely."
    ),
    "text-deduplicator": (
        "Duplicate lines creep into text files through copy-paste errors, "
        "merged data exports, and imperfect scraping scripts. Mailing lists "
        "with repeated addresses, log files with echoed entries, and product "
        "catalogs with duplicated SKUs all benefit from instant de-duplication. "
        "Removing repeats while preserving original order is something "
        "general-purpose editors cannot accomplish without fragile find-replace "
        "regex gymnastics."
    ),
    "text-reverser": (
        "Reversing text has practical and recreational uses that go beyond "
        "novelty. Developers reverse strings to test palindrome logic, "
        "data analysts flip column orders for right-to-left language support, "
        "and puzzle enthusiasts decode mirrored writing. Standard editors "
        "offer no reversal function at all, making a dedicated tool the "
        "fastest path for character-level, word-level, or line-level flipping."
    ),
    "emoji-remover": (
        "Emoji characters embedded in form submissions, database imports, and "
        "CSV exports frequently break downstream systems that expect plain "
        "ASCII — corrupting SQL inserts, truncating API fields, or rendering "
        "as mojibake in legacy applications. Stripping emoji while preserving "
        "the surrounding words is a cleanup step no text editor automates, "
        "yet it is essential for sanitizing user-generated content before "
        "it enters a strict-encoding pipeline."
    ),
    "unicode-detector": (
        "Invisible Unicode characters — zero-width spaces, soft hyphens, "
        "right-to-left override marks — can silently break code, cause "
        "phantom diff failures, and enable homoglyph phishing attacks. "
        "Developers debugging mysterious encoding errors and security teams "
        "auditing suspicious text need a way to inspect every character's "
        "codepoint, category, and visibility status, which no standard "
        "editor exposes in a readable breakdown."
    ),
    "json-diff": (
        "When API responses change between deployments or configuration files "
        "drift across environments, identifying the exact structural difference "
        "between two JSON documents is critical for debugging. Nested objects, "
        "reordered arrays, and added or removed keys are easy to miss when "
        "scanning raw text. A purpose-built JSON diff tool recursively compares "
        "both structures and surfaces every discrepancy with a clear path "
        "notation."
    ),
    "binary-to-text": (
        "Decoding sequences of 0s and 1s back into readable text is essential "
        "for interpreting raw memory dumps, analyzing network packet payloads, "
        "and solving binary-encoded puzzles in computer science courses. "
        "Converting binary by hand — grouping bits into bytes, looking up "
        "ASCII values — is slow and error-prone. A dedicated translator "
        "handles multi-byte UTF-8 sequences correctly and processes long "
        "strings instantly."
    ),
    "password-strength": (
        "Most people overestimate how strong their passwords are — an "
        "8-character mix of letters and numbers falls to a GPU cluster in "
        "minutes. Auditing credential strength against entropy estimates, "
        "character-set diversity, and known breach dictionaries gives users "
        "honest feedback before they rely on a weak password for sensitive "
        "accounts, something no browser's built-in strength bar communicates "
        "with real depth."
    ),
    "online-notepad": (
        "Jotting down a quick idea, pasting a code snippet, or drafting a "
        "temporary message shouldn't require launching a heavyweight word "
        "processor or signing into a cloud account. A browser-based notepad "
        "with auto-save to localStorage gives you an always-available scratch "
        "pad that persists between sessions, loads instantly, and never "
        "demands a login — ideal for capturing thoughts before they vanish."
    ),
    "text-statistics": (
        "Beyond simple word counts, deeper text analytics — vowel ratios, "
        "letter-frequency distributions, unique-word ratios, and syllable "
        "estimates — reveal readability levels and linguistic patterns that "
        "matter for language learning, stylometric analysis, and "
        "accessibility auditing. Standard word processors stop at a basic "
        "count, leaving writers and researchers without the quantitative "
        "insight a dedicated statistical breakdown provides."
    ),
}

# GROUP B: 15 converter tools — each has 3 replacements (B1, B2, B3)
REPLACEMENTS_B = {
    "color-converter": {
        SHARED_B1: (
            "Color values appear in many incompatible formats across design "
            "tools, CSS stylesheets, image editors, and print software. A "
            "designer might receive a HEX code from Figma, need the RGB "
            "equivalent for a canvas API, and require CMYK breakdowns for "
            "a print vendor — all within a single project. Switching between "
            "these representations without a unified converter means juggling "
            "multiple tools or memorizing conversion formulas."
        ),
        SHARED_B2: (
            "Type a HEX, RGB, HSL, CMYK, or HSV value and all five formats "
            "update simultaneously, with a large color swatch previewing the "
            "result. The conversion handles wide-gamut values and flags "
            "out-of-sRGB-range colors, so you catch gamut clipping before "
            "it reaches production."
        ),
        SHARED_B3: (
            "Color conversion math — including gamut mapping and perceptual "
            "lightness calculations — runs entirely through JavaScript in "
            "your browser session. No palette data or brand colors are "
            "transmitted externally, which matters when working with "
            "pre-launch product designs under NDA."
        ),
    },
    "temperature-converter": {
        SHARED_B1: (
            "Temperature readings arrive in different scales depending on "
            "the source: weather APIs return Celsius, American oven recipes "
            "use Fahrenheit, and scientific literature relies on Kelvin. "
            "Converting between these scales mentally leads to errors that "
            "ruin recipes, skew lab results, or cause confusion when "
            "interpreting international weather forecasts."
        ),
        SHARED_B2: (
            "Enter a value in Celsius, Fahrenheit, Kelvin, or Rankine and "
            "all four scales update instantly. Decimal precision is "
            "adjustable up to 4 places for scientific accuracy, and the "
            "interface highlights which scale you are editing so there is "
            "no ambiguity about the source unit."
        ),
        SHARED_B3: (
            "Every temperature conversion is computed through pure "
            "JavaScript arithmetic on your device. Readings from medical "
            "thermometers or industrial sensors never leave the browser, "
            "keeping sensitive health and operational data fully "
            "contained."
        ),
    },
    "weight-converter": {
        SHARED_B1: (
            "Weight measurements vary dramatically across regions and "
            "industries: a recipe calls for grams, a gym tracks body weight "
            "in pounds, shipping logistics use kilograms, and precious-metal "
            "trading references troy ounces. Navigating these systems "
            "without a reliable converter risks dosing errors in "
            "pharmaceuticals and miscalculated postage in e-commerce."
        ),
        SHARED_B2: (
            "Type a value in any supported unit — kilograms, pounds, ounces, "
            "stones, or tons — and every other unit populates immediately. "
            "Precision rounds to a sensible number of decimals for everyday "
            "use, with an option to extend digits for scientific or "
            "metallurgical applications."
        ),
        SHARED_B3: (
            "Weight conversion factors execute as native JavaScript "
            "operations within the page, with zero network requests. "
            "Whether you are converting medication dosages or confidential "
            "shipping manifests, the input values remain on your machine."
        ),
    },
    "length-converter": {
        SHARED_B1: (
            "Length and distance units scatter across measurement systems "
            "that rarely align: construction blueprints use feet and inches, "
            "European road signs use kilometers, fabric measurements cite "
            "yards, and scientific instruments report in nanometers. "
            "Cross-referencing these without a converter wastes time on "
            "projects spanning international teams and mixed standards."
        ),
        SHARED_B2: (
            "Input any measurement in meters, kilometers, miles, feet, "
            "inches, centimeters, or millimeters and see all equivalents "
            "render simultaneously. The converter supports fractional inch "
            "notation for woodworking and decimal precision toggles for "
            "engineering tolerances."
        ),
        SHARED_B3: (
            "Distance calculations run through client-side JavaScript with "
            "no backend calls. Architectural dimensions and proprietary "
            "survey measurements stay private to your browser, which is "
            "critical when handling confidential construction or patent data."
        ),
    },
    "data-size-converter": {
        SHARED_B1: (
            "Digital storage units confuse even experienced technologists "
            "because of the binary-versus-decimal divide: hard-drive vendors "
            "use decimal terabytes while operating systems report binary "
            "tebibytes, creating apparent capacity discrepancies. Cloud "
            "storage limits, bandwidth quotas, and database sizing all "
            "depend on understanding these distinctions precisely."
        ),
        SHARED_B2: (
            "Enter a value in bytes, kilobytes, megabytes, gigabytes, "
            "terabytes, or petabytes and toggle between binary (1024-based) "
            "and decimal (1000-based) conventions. The converter clearly "
            "labels each system so you never confuse a kibibyte with a "
            "kilobyte again."
        ),
        SHARED_B3: (
            "Storage unit conversions are pure arithmetic executed in the "
            "browser's JavaScript engine — no server round-trips. This "
            "matters when evaluating infrastructure capacity for projects "
            "under embargo or computing storage costs for unreleased "
            "product specifications."
        ),
    },
    "speed-converter": {
        SHARED_B1: (
            "Speed measurements fragment across domains: drivers think in "
            "miles per hour or kilometers per hour, pilots reference knots "
            "and Mach numbers, physicists use meters per second, and runners "
            "track pace in minutes per kilometer. Converting between these "
            "without a dedicated tool leads to miscalibrated treadmill "
            "settings and misread aviation charts."
        ),
        SHARED_B2: (
            "Type any speed value and instantly see equivalents in km/h, "
            "mph, knots, m/s, feet per second, and Mach. The converter "
            "preserves high decimal precision for physics calculations "
            "while rounding sensibly for everyday driving and running "
            "context."
        ),
        SHARED_B3: (
            "Velocity conversions are computed entirely on your device "
            "through JavaScript. Navigation speeds and physics experiment "
            "data are never transmitted, preserving the confidentiality "
            "of sensitive flight or research parameters."
        ),
    },
    "area-converter": {
        SHARED_B1: (
            "Land area measurement diverges wildly across contexts: real "
            "estate listings cite square feet, agricultural plots use "
            "hectares and acres, flooring materials sell by the square "
            "yard, and geographic surveys reference square kilometers. "
            "Comparing a property listed in acres to a floor plan in "
            "square meters without a converter invites costly "
            "miscalculations."
        ),
        SHARED_B2: (
            "Enter an area in square meters, square feet, acres, hectares, "
            "square yards, or square miles and all units update in concert. "
            "The interface supports both imperial and metric systems "
            "simultaneously, with precision adjustable for surveying or "
            "rough estimation."
        ),
        SHARED_B3: (
            "Area conversion math executes locally in your browser via "
            "JavaScript. Property dimensions and land valuations remain "
            "on your device, which is essential when evaluating "
            "real-estate deals before public announcement."
        ),
    },
    "timezone-converter": {
        SHARED_B1: (
            "Global teams, remote freelancers, and international travelers "
            "constantly juggle time zones — scheduling a standup between "
            "Berlin and San Francisco or catching a live stream from Tokyo "
            "requires precise offset awareness. Daylight Saving Time changes "
            "and region-specific rules make mental conversions unreliable, "
            "especially across hemispheres with opposite DST schedules."
        ),
        SHARED_B2: (
            "Pick any source city or UTC offset and the tool displays the "
            "corresponding local time across all major world zones side by "
            "side. A visual timeline highlights overlapping working hours, "
            "and DST adjustments apply automatically based on each region's "
            "current rules."
        ),
        SHARED_B3: (
            "Timezone offset logic — including the IANA timezone database "
            "rules — is resolved entirely in-browser through JavaScript. "
            "Meeting schedules and participant locations never reach a "
            "server, keeping confidential calendar coordination private."
        ),
    },
    "roman-numeral": {
        SHARED_B1: (
            "Roman numerals persist in surprising places: movie copyright "
            "dates, book chapter headings, clock faces, royal regnal "
            "numbers, sporting event titles like Super Bowl LVIII, and "
            "outline structures in academic writing. Translating between "
            "Arabic numbers and Roman notation by hand requires "
            "memorizing subtractive rules (IV, IX, XL) that trip up even "
            "confident users."
        ),
        SHARED_B2: (
            "Type any number from 1 to 3999 and the Roman numeral "
            "equivalent appears instantly — or paste a Roman numeral and "
            "get its Arabic value with validation that flags invalid "
            "combinations. The converter handles standard subtractive "
            "notation and explains the breakdown of each symbol."
        ),
        SHARED_B3: (
            "Numeral conversion logic runs as pure JavaScript in your "
            "browser with no external API calls. This keeps the tool "
            "instantly available offline, which is useful in classrooms "
            "and exam settings where network access may be restricted."
        ),
    },
    "percentage-calculator": {
        SHARED_B1: (
            "Percentage calculations surface constantly: discount pricing "
            "during sales, tax rates on invoices, tip amounts at "
            "restaurants, grade scores in education, and margin analysis "
            "in business reports. Mental percentage math is notoriously "
            "error-prone, especially for percentage-change and "
            "percentage-of scenarios that trip up even numerate "
            "professionals."
        ),
        SHARED_B2: (
            "Choose a calculation mode — percentage of a number, what "
            "percent X is of Y, or percentage increase/decrease — enter "
            "your values, and the result appears immediately with the "
            "underlying formula shown for transparency. Multiple modes "
            "let you switch between discount math and growth-rate "
            "analysis without re-entering data."
        ),
        SHARED_B3: (
            "All percentage computations execute as client-side JavaScript "
            "arithmetic. Financial figures, salary data, and pricing "
            "models remain entirely within the browser session — no "
            "sensitive business metrics are ever transmitted or logged "
            "remotely."
        ),
    },
    "age-calculator": {
        SHARED_B1: (
            "Calculating exact age — down to years, months, and days — "
            "is necessary for eligibility verification, insurance "
            "underwriting, visa applications, retirement planning, and "
            "birthday countdowns. Calendar quirks like leap years and "
            "varying month lengths make manual computation unreliable, "
            "particularly when the span crosses multiple decades."
        ),
        SHARED_B2: (
            "Enter a birth date and optionally a target date to receive "
            "a precise breakdown in years, months, weeks, and days. "
            "The calculator also shows total days lived and the next "
            "birthday countdown, with leap-year logic handled "
            "automatically."
        ),
        SHARED_B3: (
            "Age computation runs entirely through JavaScript's native "
            "Date object in your browser. Personal birth dates and "
            "identity-related information never leave your device, "
            "which is essential for privacy-sensitive eligibility and "
            "documentation tasks."
        ),
    },
    "bmi-calculator": {
        SHARED_B1: (
            "Body Mass Index remains the most widely used screening "
            "metric for healthy weight ranges, appearing in fitness "
            "apps, medical intake forms, and insurance assessments. "
            "Computing BMI requires dividing weight by height squared "
            "with unit conversion between metric and imperial — a "
            "formula that is cumbersome to apply mentally and prone "
            "to rounding errors."
        ),
        SHARED_B2: (
            "Select metric or imperial units, enter your height and "
            "weight, and the BMI value appears instantly alongside "
            "its WHO health category (underweight, normal, overweight, "
            "or obese). The interface also shows the healthy weight "
            "range for your specific height."
        ),
        SHARED_B3: (
            "BMI calculation runs as client-side JavaScript with no "
            "server transmission. Health and body measurements — "
            "sensitive personal data — stay completely private within "
            "your browser session, requiring no account or medical "
            "portal login."
        ),
    },
    "audio-converter": {
        SHARED_B1: (
            "Audio file formats and sample rates create compatibility "
            "headaches across platforms: professional DAWs export at "
            "48 kHz/24-bit, voice assistants expect 16 kHz mono WAV, "
            "and web playback often requires downsampling for "
            "bandwidth optimization. Converting between these "
            "configurations without specialized audio software "
            "typically means installing bulky DAWs or command-line "
            "tools like FFmpeg."
        ),
        SHARED_B2: (
            "Upload an audio file and select the target format, sample "
            "rate, and channel configuration. The conversion processes "
            "the waveform in-browser using the Web Audio API, with a "
            "preview player for verifying output quality before "
            "download."
        ),
        SHARED_B3: (
            "Audio processing happens entirely through the browser's "
            "Web Audio API — the file is decoded, resampled, and "
            "re-encoded without any upload to a remote server. Voice "
            "memos, interview recordings, and unreleased music tracks "
            "never leave your device."
        ),
    },
    "days-between": {
        SHARED_B1: (
            "Counting the days between two dates is essential for "
            "project deadline tracking, contract duration calculations, "
            "pregnancy week counting, visa-validity periods, and "
            "financial interest accrual. Manual counting across "
            "calendar boundaries — especially spanning leap years — "
            "is tedious and error-prone without a dedicated date "
            "calculator."
        ),
        SHARED_B2: (
            "Select a start and end date using the calendar pickers "
            "and the tool displays the exact difference in total days, "
            "weeks, months, and years. An option to exclude weekends "
            "makes it useful for business-day and sprint-duration "
            "calculations."
        ),
        SHARED_B3: (
            "Date-difference arithmetic executes through JavaScript's "
            "native Date object entirely in the browser. Contract "
            "deadlines, medical timelines, and project schedules — "
            "potentially confidential — are processed locally with "
            "no server round-trip."
        ),
    },
    "aspect-ratio-calculator": {
        SHARED_B1: (
            "Aspect ratio calculations are critical for video "
            "production, UI design, photography cropping, and print "
            "layout: matching a 16:9 thumbnail, preserving a 4:3 "
            "sensor crop, or fitting content into a 21:9 ultrawide "
            "banner without distortion. Guessing dimensions by eye "
            "leads to stretched images and letterboxing artifacts."
        ),
        SHARED_B2: (
            "Enter any two dimensions or pick a common ratio preset "
            "(16:9, 4:3, 1:1, 9:16, 21:9) and the tool computes the "
            "matching width, height, and exact ratio in reduced form. "
            "A visual preview rectangle shows the proportions "
            "graphically."
        ),
        SHARED_B3: (
            "Ratio reduction and dimension math run as pure "
            "JavaScript arithmetic within the page. Design "
            "specifications and unreleased product dimensions are "
            "never sent to any server, keeping proprietary creative "
            "work private."
        ),
    },
}

# GROUP C: 9 utility tools — replaces SHARED_C
REPLACEMENTS_C = {
    "random-string-generator": (
        "Generating random strings is a frequent requirement in "
        "development and testing workflows: creating API tokens, "
        "seeding test databases with unique identifiers, producing "
        "nonce values for CSP headers, and generating coupon codes "
        "for promotions. Doing this manually or with ad-hoc scripts "
        "wastes time and often produces insufficiently random output, "
        "especially when cryptographic entropy is needed."
    ),
    "palindrome-checker": (
        "Palindrome detection has both educational and practical "
        "applications: language teachers use it in exercises, "
        "developers test string-manipulation functions against it, "
        "and puzzle solvers verify word-game answers. Checking by "
        "eye is unreliable for longer phrases, especially when "
        "spaces, punctuation, and mixed casing must be normalized "
        "before comparison."
    ),
    "random-number-generator": (
        "Drawing random numbers within a specified range is needed "
        "for raffle draws, statistical sampling, classroom "
        "randomization, A/B test assignment, and game mechanics. "
        "Physical methods like drawing slips are impractical for "
        "large ranges, and spreadsheet RAND functions require "
        "formula setup — a purpose-built generator with inclusive "
        "range control and optional uniqueness is far more direct."
    ),
    "color-palette": (
        "Building harmonious color palettes is a core step in brand "
        "design, UI theming, and data-visualization styling. "
        "Designers need complementary, analogous, triadic, and "
        "monochromatic schemes derived from a single seed color, "
        "but iterating through color-theory relationships manually "
        "is slow and requires deep knowledge of the HSL color wheel."
    ),
    "countdown-timer": (
        "Tracking time until a future event — a product launch, "
        "exam date, retirement, or holiday — is a surprisingly "
        "common need that calendar apps handle clumsily at best. "
        "A dedicated countdown provides persistent, real-time "
        "precision down to the second, with the ability to monitor "
        "multiple milestones simultaneously without installing "
        "timer software or enabling notifications."
    ),
    "dice-roller": (
        "Rolling dice digitally serves tabletop RPG players running "
        "remote sessions, teachers using probability demonstrations, "
        "and game developers prototyping mechanics. Physical dice "
        "are easily lost and limited to standard shapes, whereas a "
        "virtual roller supports d4 through d20, rolls multiple dice "
        "at once, and logs results — no bag of dice or flat surface "
        "required."
    ),
    "decision-maker": (
        "Breaking indecision — choosing a restaurant, assigning a "
        "task owner, picking a winner from a giveaway — is a "
        "small but real friction point throughout the day. Flipping "
        "a coin is binary and biased toward recall; a random "
        "picker that accepts any number of weighted or unweighted "
        "options resolves the choice fairly and removes the "
        "psychological burden of deciding."
    ),
    "barcode-generator": (
        "Generating barcodes is essential for retail product "
        "labeling, inventory management, shipping labels, event "
        "ticketing, and library cataloging. Creating Code128, "
        "EAN-13, or Code39 barcodes typically requires dedicated "
        "software or paid SaaS subscriptions, yet the encoding "
        "logic is straightforward enough to run entirely in a "
        "browser with no installation."
    ),
    "qr-reader": (
        "Decoding QR codes from images is necessary when a phone "
        "camera cannot scan directly — for instance, extracting a "
        "URL from a screenshot, verifying a printed event ticket's "
        "embedded data, or reading a Wi-Fi credential code from a "
        "shared photo. Browser-native barcode detection APIs make "
        "this possible without installing a dedicated scanning app."
    ),
}


def find_tool_block_end(content: str, slug: str) -> tuple[int, int]:
    """Return (start, end) char offsets of the tool block for `slug`.
    The block starts at the `\"slug\": {` key and ends at the closing `}`."""
    key_pattern = f'  "{slug}": {{'
    start = content.find(key_pattern)
    if start == -1:
        raise ValueError(f"Tool slug not found: {slug}")
    # Find the matching closing brace by tracking depth from the opening brace
    brace_start = content.index('{', start)
    depth = 0
    i = brace_start
    while i < len(content):
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                return start, i + 1
        i += 1
    raise ValueError(f"Could not find closing brace for tool: {slug}")


def replace_in_block(content: str, slug: str, old_text: str, new_text: str) -> str:
    """Replace the first occurrence of `old_text` within `slug`'s block only."""
    start, end = find_tool_block_end(content, slug)
    block = content[start:end]

    # Only replace within the en: section (first backtick-delimited string)
    # Find en: block
    en_marker = "en: `"
    en_start = block.find(en_marker)
    if en_start == -1:
        raise ValueError(f"No en: block found for {slug}")
    content_start = en_start + len(en_marker)
    content_end = block.find("`", content_start)
    if content_end == -1:
        raise ValueError(f"Malformed en: block for {slug}")
    en_content = block[content_start:content_end]

    if old_text not in en_content:
        raise ValueError(
            f"Shared paragraph not found in en: block for {slug}"
        )

    new_en_content = en_content.replace(old_text, new_text, 1)
    new_block = block[:content_start] + new_en_content + block[content_end:]
    return content[:start] + new_block + content[end:]


def main():
    with open(GUIDES_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    original_len = len(content)
    stats = {"A": 0, "B": 0, "C": 0}

    # GROUP A
    for slug, replacement in REPLACEMENTS_A.items():
        content = replace_in_block(content, slug, SHARED_A, replacement)
        stats["A"] += 1

    # GROUP B (3 paragraphs each)
    for slug, replacements in REPLACEMENTS_B.items():
        for shared_text, new_text in replacements.items():
            content = replace_in_block(content, slug, shared_text, new_text)
            stats["B"] += 1

    # GROUP C
    for slug, replacement in REPLACEMENTS_C.items():
        content = replace_in_block(content, slug, SHARED_C, replacement)
        stats["C"] += 1

    with open(GUIDES_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    total = stats["A"] + stats["B"] + stats["C"]
    print(f"✓ Replaced {total} paragraphs "
          f"(A: {stats['A']}, B: {stats['B']}, C: {stats['C']})")
    print(f"  File size: {original_len} → {len(content)} bytes")


if __name__ == "__main__":
    main()
