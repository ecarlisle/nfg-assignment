# NFG Assignment Notes

### Styling
* The pie chart behind fundraiser headshots is out of scope and I totally respect that. Being tempted towards out of scope work presents risk. Had they been a requirement, though, the charts could be quickly implemented via SVG shapes. I typically use D3JS for data/DOM integration and data visualization, though that would be overkill as a JS function could be used to render these charts.

### Typography Notes
 * The main font in use appears to be Museo Sans, which I'd like to ideally like to match. As that font requires licensing (e.g. TypeKit), I used close-ish serif matches, Lato and Lato Light, assuming those would be an acceptable substiture for this exercise.
 * The Lato web fonts were copied locally into the *fonts/* folder, though linking them via Google fonts could provide CDN and caching advantages.

### CSS Notes
* Pixels were used as dimensional units. I prefer to use proportional units like %, rem, and vw/wh, but I didn't want not to make a sweeping presumption on the units used by the application.

### Component Notes
* The Collapse component was used to toggle display via the "See All Fundraisers" link.

### Asset Notes
* I typically use absolute path references to JS, CSS, and media from the HTML. In this case, however, I used relative paths as the per the requirement to able to run the html file directly from a folder.

### Build Notes
* I would usually exclude *css/application.css* from a repo and let that file be built as part of the build process. I left the file in so that it would be immediately available for viewing and running.
* I did not import bootstrap.css into application.css via LESS so that the custom theming could be easily viewed. In a production environment, the opportunity to consolidate the files would provide a performance boon (one less HTTP connection needed).

### Dev Methodology Notes
* As per the Bootstrap 3 approach, the mobile-first methodology was used for this exercise.

### Wireframe Notes
* I changed the CTA in the wireframe, "Start Campaign," to match the CTA, "Start Your Campaign!" in the hero.

### Questions
* The low fidelity wireframe shows "20 people have started fundraising" but the 20 is crossed out. I would have confirmed if the number was not be used, and if not, would there be a change in copy.

### 3-Fundraisers/Row on Mobile
From the requirements document: 

*"Each row of 6 users should “break down” to a row of 3 users at the mobile breakpoint. If 3 users at the mobile screen size isn’t viable or desirable, deliver an alternative solution and justify why your alternative may be a better solution through an HTML comment in your markup."*

Making rows of 3 fundraisers on the lowest mobile size presents issue with both form and function:

**FORM:** The content, 3 images with full name labels, may become crowded. With the grid several even divisions of 12 columns are possible. Each breakpoint may be given a division for which content best fits in form.

**FUNCTION:** Bootstrap columns do not have equal height.  Therefore, closely crowded content may cause unexpected float breaks. There are several CSS hacks that can be used as workarounds, but none ideal. Additionally, the flexbox display mode could be used to give columns equal height. That solution is very graceful but has cross-browser compliance risks.

My solution was to give each figure the following combination of resets:

 * col-xs-6 
 * col-sm-4 
 * col-md-3 
 * col-lg-2

This appropriates content space for each breakpoint that I believe best compliments the form. This also places two fundraisers per row on the smallest display widths, lessening the risk of float breaks.
