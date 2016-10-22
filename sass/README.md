SASS Architecture Overview
==========================

The SASS folder architecture is relatively straightforward.  The organization of files is based
on best practices.  I am not going to describe what each folder represents, but if you haven't seen
this layout before, check this [link](https://www.sitepoint.com/architecture-sass-project/).  

The _main.scss file, at root level, is responsible for importing and merging all files.

> “One file to rule them all,
One file to find them,
One file to bring them all,
And in the Sass way merge them.” 
- J.R.R. Tolkien

---

*Note*: The modules folder is slightly odd.  When I started developing the site, I had every intention of
making it a single, centered, card-like module.  As I was building away, I saw the opportunity to develop 
a brand new, well-maintained site ( My old site's styles were a mess :( ).  As a result of this decision, 
each module / layout module is prefixed with .card.  Following the BEM styling nameing convention, you'll 
see things like: .card__top-container .  In the future, I'll be sure to change this, since it really doesn't
make much sense anymore. 