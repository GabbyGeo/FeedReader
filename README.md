$Feed Reader Testing Project
========

Feed reader test assignment involved using Jasmine to write a number of tests against a pre-existing application.  This tested the underlying buisness logic of the application as well as the event handling and DOM manipulation. 

Running the Application
------------

Begin $FeedReader Testing Project by opening:

	https://gabbygeo.github.io/FeedReader/  


Steps Taken to Write the Jasmine Tests 
--------

In Jasmine/spec/feedreader.js:
- Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty. 
- Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
- Wrote a new test suite named "The menu".
- Wrote a test that ensures the menu element is hidden by default. 
- Wrote a test that ensures the menu changes visibility when the menu icon is clicked. 
- Wrote a test suite named "Initial Entries".
- Wrote a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
- Wrote a test suite named "New Feed Selection".
- Wrote a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


Contribute
----------

- Source Code: https://gabbygeo.github.io/FeedReader/

Support
-------

If you are having issues, please let us know.
Email: gabriellejf@gmail.com 

License
-------

The project is not licensed.
