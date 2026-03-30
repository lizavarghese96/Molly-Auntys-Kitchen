# Molly Aunty's Kitchen — v2

A single-page interactive planning website for our homemade Kerala pothichoru business.

## What's new in v2

- **Single page** — everything in one `index.html`, no broken links between pages
- **Interactive profit calculator** — drag sliders to see daily profit in real time
- **April checklist** — tick off tasks as you complete them, with a progress bar
- **Image placeholders** — clearly marked spots to drop in real food photos
- **Mobile friendly** — works great on aunty's phone
- **Animated** — subtle fade-ins and the swaying banana leaf on load

## How to add your photos

Find the placeholder divs like this:
```html
<div class="img-ph menu-img">
  <span class="ph-icon">🥬</span>
  <span class="ph-text">Add veg pothichoru photo</span>
</div>
```

Replace with:
```html
<img src="assets/veg-pothichoru.jpg" alt="Veg Pothichoru" style="width:100%;height:180px;object-fit:cover">
```

Put all your photos in the `assets/` folder.

## Sections

| Section | What's inside |
|---------|--------------|
| Home | Overview, roadmap, quick links |
| Menu | 4 dishes with image slots + photo gallery |
| The Plan | Full April/May timeline + delivery/marketing details |
| Roles | Aunty vs you, daily schedule |
| Money | **Interactive profit calculator** + cost breakdown |
| April Checklist | **Interactive tick-list** with progress bar |
| Concerns | All risks with green "how we handle it" boxes |

---
*One banana leaf at a time.*
