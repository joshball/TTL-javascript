define(function(require) {
    var PrettyStorage = require('PrettyStorage');
    describe('Pretty Storage Specs', function() {

    var expect = require('chai').expect;


    //    mocha.setup({globals: ['i']})
    //    mocha.setup({ignoreLeaks: true});
    //    it('should be my first test', function() {
    //        i = 3;
    //    });
        before(function() {
            //console.log('before');
        });

        after(function() {
            //console.log('after');
        });

        beforeEach(function() {
            //console.log('beforeEach');
        });

        afterEach(function() {
            //console.log('afterEach');
        });

        describe('Pending Tests', function(){
            it('it Pending test too write');
        });

        // describe.only/it.only
        // describe.skip/it.skip (xit/xdescribe)

        describe('Pretty Storage', function(){
            it('new object should have a name of simple', function() {
                expect(new PrettyStorage()).to.not.be.null;
            });

            it('should return 1 byte when bytes is 1', function() {
                var ps = new PrettyStorage();
                expect(ps.pretty(1)).to.equal('1 byte');
            });
        });


    });

});
