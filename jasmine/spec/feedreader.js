/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /*This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object and ensures 
         * it has a URL defined and that the URL is not empty.
         */

        it('no empty URLs', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Loops through each feed in the allFeeds object and ensures 
         * it has a name defined and that the name is not empty.
         */
        it('name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });


    });


    describe("The menu", function() {

        /* Ensures the menu element is hidden by default. 
         */

        it('is hidden', function() {
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

        /* Ensures the menu changes visibility when the menu icon is clicked. 
         */

        it('menu toggles', function() {
            $('.menu-icon-link').click();
            expect($(document.body).hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Ensures when the loadFeed function is called and completes its work, 
     * there is at least a single .entry element within the .feed container.
     */

    describe("Initial Entries", function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least 1 entry within feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    /* Ensures when a new feed is loaded by the loadFeed function 
     * that the content actually changes.
     */

    describe("New Feed Selection", function() {
        var oldFeedContent;
        var newFeedContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeedContent = ($('.feed').html());
                loadFeed(1, function() {
                    newFeedContent = ($('.feed').html());
                    done();
                });
            });
        });

        it('Content changes', function(done) {
            expect(oldFeedContent).not.toEqual(newFeedContent);
            done();
        });
    });
}());
