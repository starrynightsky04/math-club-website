// ============================================================
//   LELAND MATH CLUB  ·  SITE CONTENT
// ============================================================
//
//   THIS IS THE ONE FILE YOU EDIT to update the info that
//   changes most often. You do NOT need to know how to code.
//
//   HOW TO EDIT SAFELY:
//     1. Only change the text INSIDE the quotation marks '  '.
//     2. Keep the quotes, the commas, and the curly braces { }
//        exactly where they are.
//     3. Do not delete the words before the ':' (like name: or
//        role:). Those are labels the website needs.
//
//   After you save, the live website updates on its own in a
//   few minutes. Full step-by-step help is in README.md.
//
// ============================================================


// ------------------------------------------------------------
//   WHEN AND WHERE WE MEET
// ------------------------------------------------------------
//   These three values appear ALL OVER the site (home page,
//   events page, contact page, and more). Change them here one
//   time and they update everywhere automatically.
//
//   Note: if you ever change the meeting DAY, a couple of
//   sentences also say the day in words (for example
//   "Meetings every Friday"). Search the site for the old day
//   if you want those to match too.
// ------------------------------------------------------------
export const meeting = {
  day: 'Fridays',           // the day we meet, e.g. 'Fridays'
  time: '3:30 to 4:30 PM',  // the time, e.g. '3:30 to 4:30 PM'
  room: 'Room C3',          // where we meet, e.g. 'Room C3'
}


// ------------------------------------------------------------
//   HOW PEOPLE REACH US
// ------------------------------------------------------------
//   Used on the Contact page (and the email is used in a few
//   other spots). Update if the club email or handle changes.
// ------------------------------------------------------------
export const contact = {
  email: 'radicalz112358@gmail.com',   // main club email
  instagram: '@lelandmathclub',        // Instagram handle
}


// ------------------------------------------------------------
//   FACULTY ADVISOR
// ------------------------------------------------------------
//   The teacher who advises the club. Shown on the Officers
//   page and the Contact page.
// ------------------------------------------------------------
export const advisor = {
  name: 'Ms. Montgomery',
  // Short line shown on the Contact page:
  subjects: 'AP Calculus BC and Pre-Calculus Honors',
  // Longer description shown on the Officers page:
  bio: 'Ms. Montgomery teaches AP Calculus BC and Pre-Calculus Honors at Leland, ' +
    'and she is the advisor who makes all of this possible! She helps run our ' +
    'meetings and keeps tournament logistics on track so the rest of us can ' +
    'focus on the math',
}


// ------------------------------------------------------------
//   STUDENT OFFICERS
// ------------------------------------------------------------
//   The officers shown on the "Officers" page.
//
//   TO UPDATE A NAME: change the text after name:
//   TO ADD AN OFFICER: copy one full line (from the { to the },
//     including the comma at the end) and paste it below,
//     then change the role, name, and bio.
//   TO REMOVE AN OFFICER: delete that whole line.
//
//   Keep them in the order you want them to appear.
// ------------------------------------------------------------
export const officers = [
  { role: 'President',      name: 'Ishaan Desai',     bio: 'Short description.' },
  { role: 'Vice President', name: 'Anjika Bansal',    bio: 'Short description.' },
  { role: 'Secretary',      name: 'Calvin Sridhara',  bio: 'Short description.' },
  { role: 'Treasurer',      name: 'Jayden Kim',       bio: 'Short description.' },
]


// ------------------------------------------------------------
//   COMPETITIONS WE ENTER (the "Events" page)
// ------------------------------------------------------------
//   Shown in the "Our competition year" timeline.
//     season: a short label like 'Fall', 'Spring', or 'Local'
//     name:   the competition name
//     when:   when it happens
//     blurb:  a sentence or two describing it
//
//   Add, remove, or edit these the same way as the officers
//   above (copy a full { ... }, line to add one).
// ------------------------------------------------------------
export const tournaments = [
  {
    season: 'Fall',
    name: 'AMC 10/12',
    when: 'Early November (exact date TBD)',
    blurb:
      'The American Mathematics Competition! This is the big one we spend the fall prepping for, and a strong score opens the door to AIME.',
  },
  {
    season: 'Spring',
    name: 'AIME',
    when: 'Spring (date TBD)',
    blurb:
      'The American Invitational Mathematics Examination, for everyone who qualifies off the AMC. Three hours, fifteen problems, no calculators!',
  },
  {
    season: 'Local',
    name: 'Bay Area Tournaments',
    when: 'Throughout the year',
    blurb:
      'Every year we road trip to the Stanford Math Tournament (SMT) and the Berkeley Math Tournament (BMT) to go head to head with teams from all over the region!',
  },
]


// ------------------------------------------------------------
//   COMPETITION RESULTS (the "Past Events" box)
// ------------------------------------------------------------
//   While this list is empty ( [] ), the site shows the
//   "results coming soon" message. As soon as you add a result
//   below, the site shows your list instead.
//
//   TO ADD A RESULT: remove the // in front of a line and fill
//   it in, or copy the example format:
//     { name: 'Stanford Math Tournament 2025', detail: 'Placed 4th out of 30 teams!' },
// ------------------------------------------------------------
export const results = [
  // { name: 'Stanford Math Tournament 2025', detail: 'Placed 4th out of 30 teams!' },
]
