var assert = require('assert');
var webdriverio = require('webdriverio');

var client;

var seleniumHubSettings = {
    host: 'localhost',
    port: 9515,
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'window-size=340,750'
            ],
            mobileEmulation: {
                "deviceName": "Apple iPhone 5"
            }

        }

    }
};

describe('Basic test', function() {


    before(function(done) {
        client = webdriverio.remote(seleniumHubSettings);
        client.init(done);
    });

    after(function(done) {
        client.end(done);
    });

    it('should have a title FireSlide', function(done) {
        client.url('localhost:8080')
            .getTitle(function(err, title) {
                assert.equal('FireSlide', title);
            })
            .call(done);
    });
});
