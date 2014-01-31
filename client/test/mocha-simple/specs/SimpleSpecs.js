
var SimpleObject = function(name){
    var self = this;
    this.name = name || 'Simple';
    this.greet = function(cb){
        setTimeout(function(){
            cb(self.name + ' says ciao!');
        }, 2500);
    };
};

describe('Simple Specs', function() {

//    mocha.setup({globals: ['i']})
//    mocha.setup({ignoreLeaks: true});
//    it('should be my first test', function() {
//        i = 3;
//    });

	before(function() {
		console.log('before');
	});

	after(function() {
		console.log('after');
	});

	beforeEach(function() {
		console.log('beforeEach');
	});

	afterEach(function() {
		console.log('afterEach');
	});

    describe('Pending Tests', function(){
        it('it Pending test too write');
    });

    // describe.only/it.only
    // describe.skip/it.skip (xit/xdescribe)

    describe('Simple Object', function(){
        it('new object should have a name of simple', function() {
            expect(new SimpleObject().name).to.equal('Simple');
        });
        it('new object with name Foo should have a name of Foo', function() {
            expect(new SimpleObject('Foo').name).to.equal('Foo');
        });

        it('new object should return greeting', function(done) {
            //mocha.setup({timeout: 2000});
            this.timeout(3000);
            var greetCb = function(greeting){
                expect(greeting).to.equal('Simple says ciao!');
                done();
            }
            new SimpleObject().greet(greetCb);
        });
    });

});
