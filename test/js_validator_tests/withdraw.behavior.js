const {
    conditional,
    clone,
    BN,
    MAX_UINT256,
    expect,
    expectThrow
} = require("./_test.utils.js");

// function shouldHavePendingEth(_address) {
    
//     describe("Should have pending Eth", function () {
//         let cancelModes, hasPendingETH, canWithdraw;

//         before(function() {
//             cancelModes = this.JSContract.getCancelModes(_address);
//             hasPendingETH = this.JSContract.hasPendingETH(_address);
//             canWithdraw = this.JSContract.canWithdraw(_address);
//         })

//         it("hasPendingETH returns true", function () {
//             expect(hasPendingETH).is.equal(true);
//         });
//     });
// }

// function shouldHavePendingEth(_address) {
    
//     describe("Should have pending Eth", function () {
//         let canWithdraw;

//         before(function() {
//             canWithdraw = this.JSContract.canWithdraw(_address);
//         })

//         it("canWithdraw returns true", function () {
//             expect(canWithdraw).is.equal(true);
//         });
//     });
// }

function shouldHavePendingEth(_address) {
    
    describe("Should have pending Eth", function () {
        let hasPendingETH;

        before(function() {
            hasPendingETH = this.JSContract.hasPendingETH(_address);
        })

        it("hasPendingETH returns true", function () {
            expect(hasPendingETH).is.equal(true);
        });
    });
}

function shouldNotHavePendingEth(_address) {
    
    describe("Should not have pending Eth", function () {
        let hasPendingETH;

        before(function() {
            hasPendingETH = this.JSContract.hasPendingETH(_address);
        })

        it("hasPendingETH returns false", function () {
            expect(hasPendingETH).is.equal(false);
        });
    });
}






module.exports = {
    shouldHavePendingEth,
    shouldNotHavePendingEth,
};

