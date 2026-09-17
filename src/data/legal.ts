// Content for the static legal pages. These are prerendered to plain HTML with
// no client JS — see scripts/prerender.js.
//
// REVIEW BEFORE RELYING ON THESE: the statements about the website itself are
// verified against the codebase (no forms, no analytics, no cookies, no
// storage; third parties limited to Vercel, Google Fonts, Unsplash and
// WhatsApp). The statements about how GharInspect handles data during an
// actual inspection are written to the common practice for this kind of
// service and must be checked against what the business genuinely does.

export type Block = string | { list: string[] }
export type Section = { heading: string; blocks: Block[] }
export type LegalDoc = {
  slug: string
  title: string
  description: string
  updated: string
  updatedISO: string
  intro: string
  sections: Section[]
}

const CONTACT = 'support@gharinspect.in'
const PHONE = '+91 90219 07313'
const ADDRESS = 'Chinchwad 411033, Pune'
const UPDATED = '17 September 2026'
const UPDATED_ISO = '2026-09-17'

export const privacy: LegalDoc = {
  slug: 'privacy',
  title: 'Privacy Policy',
  description:
    'How GharInspect handles personal data. This website sets no cookies, runs no analytics and collects nothing directly.',
  updated: UPDATED,
  updatedISO: UPDATED_ISO,
  intro:
    'This policy explains what GharInspect does with personal data. It covers two separate things: this website, which collects almost nothing, and the inspection service itself, which necessarily involves your contact details and your property.',
  sections: [
    {
      heading: '1. What this website collects',
      blocks: [
        'Nothing directly. This site has no contact form, no sign-up, no login and no comment facility. It sets no cookies, runs no analytics or advertising scripts, and stores nothing in your browser.',
        'There is no tracking on this site to opt out of, because there is none to begin with.',
      ],
    },
    {
      heading: '2. What happens automatically when you visit',
      blocks: [
        'Loading any website involves your device contacting servers, and those servers can see your IP address. For this site that means:',
        {
          list: [
            'Vercel, our hosting provider, records standard server logs including IP address, the page requested, and your browser type. These are used to serve the site and guard against abuse.',
            'Google Fonts serves the typeface used on this site. Google receives your IP address as part of that request.',
            'Unsplash serves the two photographs on this site. Unsplash receives your IP address as part of that request.',
          ],
        },
        'We do not combine this information with anything else, and we cannot identify you from it.',
      ],
    },
    {
      heading: '3. When you contact us on WhatsApp',
      blocks: [
        'Every enquiry button on this site opens WhatsApp. When you send us a message we receive your WhatsApp display name, your phone number, and whatever you choose to tell us.',
        'WhatsApp is operated by Meta, and your use of it is governed by Meta’s own privacy policy, not this one. We have no control over how Meta processes your data.',
        'You can also reach us by email or phone using the details in section 9 if you would rather not use WhatsApp.',
      ],
    },
    {
      heading: '4. What we collect when you book an inspection',
      blocks: [
        'To carry out an inspection we need, and will ask you for:',
        {
          list: [
            'Your name and contact details, so we can arrange and confirm the visit.',
            'The address and configuration of the property to be inspected.',
            'Access arrangements, and the name of a builder or society contact where relevant.',
          ],
        },
        'During the inspection our engineer records findings, measurements and photographs of the property. These form your inspection report.',
      ],
    },
    {
      heading: '5. Why we use it, and on what basis',
      blocks: [
        'We use the information above only to schedule and carry out the inspection you asked for, to produce and deliver your report, to answer follow-up questions about it, and to meet our own tax and accounting obligations.',
        'We process it because you have asked us to provide the service, and on the basis of the consent you give when you engage us. You may withdraw that consent at any time, though we may be unable to complete an inspection if you do.',
        'We do not use your data for advertising, we do not profile you, and we take no automated decisions about you.',
      ],
    },
    {
      heading: '6. Who we share it with',
      blocks: [
        'We do not sell personal data, and we do not share it for marketing.',
        'Your inspection report is yours. We release it to a builder, developer, society or anyone else only if you ask us to.',
        'We share data only with service providers who help us operate — for example our hosting provider and email provider — and only to the extent they need it, or where the law requires disclosure.',
      ],
    },
    {
      heading: '7. How long we keep it',
      blocks: [
        'We keep enquiry correspondence only as long as needed to respond to it.',
        'We keep inspection reports and the records behind them for as long as they may reasonably be needed — so that you can request a copy, and so that we can answer questions or disputes about an inspection we carried out — and for as long as tax and accounting law requires us to retain the related records.',
        'When data is no longer needed for either purpose, we delete it.',
      ],
    },
    {
      heading: '8. Your rights',
      blocks: [
        'Under India’s Digital Personal Data Protection Act, 2023, you may:',
        {
          list: [
            'Ask what personal data of yours we hold and how it has been used.',
            'Ask us to correct anything inaccurate or incomplete.',
            'Ask us to delete data we no longer need to keep.',
            'Withdraw consent you previously gave.',
            'Nominate someone to exercise these rights on your behalf if you die or become incapacitated.',
            'Complain to the Data Protection Board of India if you are not satisfied with how we have handled your request.',
          ],
        },
        'To exercise any of these, write to the Grievance Officer in section 9. We will respond as quickly as we reasonably can.',
      ],
    },
    {
      heading: '9. Contact and grievance redressal',
      blocks: [
        'For any question about this policy, or to exercise any right above, contact our Grievance Officer:',
        {
          list: [
            `Email: ${CONTACT}`,
            `Phone: ${PHONE}`,
            `Post: Grievance Officer, GharInspect, ${ADDRESS}`,
          ],
        },
      ],
    },
    {
      heading: '10. Changes to this policy',
      blocks: [
        'If we change this policy we will update the date at the top of this page. Where a change materially affects how we handle your data, we will tell you directly.',
      ],
    },
  ],
}

export const terms: LegalDoc = {
  slug: 'terms',
  title: 'Terms of Service',
  description:
    'The terms on which GharInspect provides home inspection services, including what an inspection does and does not cover.',
  updated: UPDATED,
  updatedISO: UPDATED_ISO,
  intro:
    'These terms apply when you engage GharInspect to inspect a property. Section 4 is the important one: it explains the limits of what any visual inspection can tell you.',
  sections: [
    {
      heading: '1. Who we are',
      blocks: [
        `GharInspect provides home inspection services for new-possession and resale property in India. You can reach us at ${CONTACT} or ${PHONE}. Our address is ${ADDRESS}.`,
      ],
    },
    {
      heading: '2. Booking an inspection',
      blocks: [
        'An enquiry is not a booking. A booking exists once we have confirmed a date, time and price with you in writing, including over WhatsApp.',
        'Prices shown on this site are for the property sizes described against them. Villas, commercial premises and unusual properties are quoted individually. We will tell you the price before any work begins.',
        'You are responsible for arranging access to the property at the agreed time, including any permission needed from a builder, society or current occupant.',
      ],
    },
    {
      heading: '3. What an inspection includes',
      blocks: [
        'Our engineer carries out a visual, non-invasive inspection of the property against our standard checklist, covering civil, electrical, plumbing and finishing work, supported by instruments such as thermal imaging and moisture meters where appropriate.',
        'You receive a written report, documented with photographs, normally within 24 hours of the visit. The report describes what we observed on the day.',
      ],
    },
    {
      heading: '4. What an inspection cannot tell you — please read',
      blocks: [
        'A home inspection is a visual assessment made on one day. It is not a guarantee, a warranty, or an insurance policy against future problems. Specifically:',
        {
          list: [
            'We do not dismantle, open up, or damage any part of the property. We cannot see inside walls, under floors, behind fixed furniture, or into concealed conduits and pipes.',
            'We cannot report on defects that are hidden, inaccessible, or not present at the time of the visit.',
            'We do not carry out structural design calculations, soil testing, or laboratory analysis of materials.',
            'We do not verify legal title, approvals, permissions, encumbrances or compliance with planning law.',
            'We do not value the property, and our report is not a valuation.',
            'Conditions change. A property can develop defects after we inspect it.',
          ],
        },
        'Our report is professional opinion based on visual examination. It is one input into your decision, not a substitute for legal, structural or financial advice.',
      ],
    },
    {
      heading: '5. Using your report',
      blocks: [
        'The report is prepared for you, for the property and the date stated in it. You may share it with your builder, developer, society, lawyer or lender.',
        'It should not be relied upon by a third party as though it were prepared for them, and it should not be relied upon for a different property or a later date. We accept no responsibility to anyone we did not prepare it for.',
        'Do not edit the report or present extracts in a way that changes their meaning.',
      ],
    },
    {
      heading: '6. Payment, cancellation and rescheduling',
      blocks: [
        'Payment terms are agreed with you at the time of booking.',
        'You may reschedule or cancel by telling us as early as you reasonably can. If our engineer has already travelled to the property, or cannot gain access at the agreed time through no fault of ours, we may charge for the visit.',
        'If we have to cancel or reschedule, we will offer you the earliest alternative slot we have.',
      ],
    },
    {
      heading: '7. If something goes wrong',
      blocks: [
        'If you believe our report missed something we should reasonably have found, tell us promptly and give us a fair opportunity to re-inspect and put it right. Re-inspection is the first remedy we offer.',
        'Nothing in these terms limits liability where the law does not allow it to be limited, including for death or personal injury caused by negligence, or for fraud.',
        'Subject to that, and to the limits described in section 4, our liability in connection with an inspection is limited to the fee you paid for it.',
      ],
    },
    {
      heading: '8. This website',
      blocks: [
        'The content of this site is provided for information. We try to keep it accurate and current, but we do not warrant that it is free of errors.',
        'The text, images, branding and report formats on this site belong to GharInspect or our licensors and may not be reproduced commercially without permission.',
        'How we handle personal data is set out in our Privacy Policy.',
      ],
    },
    {
      heading: '9. Governing law',
      blocks: [
        'These terms are governed by the laws of India. The courts at Pune, Maharashtra have jurisdiction over any dispute arising from them.',
      ],
    },
    {
      heading: '10. Changes to these terms',
      blocks: [
        'We may update these terms. The version that applies to your inspection is the one published when you booked it. The date at the top of this page shows when it was last changed.',
      ],
    },
  ],
}

export const legalDocs = [privacy, terms]
