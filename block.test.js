const Block = require("./block");
const { GENESIS_DATA } = require('./config');

describe('Block', () => {
    const timeStamp = '123456';
    const hash = 'foo-hash';
    const lastHash = 'foo-lastHash';
    const data = ['karim aghga', 'soliemoon'];

    const block = new Block({
        timeStamp, hash, lastHash, data
    });

    it('has 4 main values', () => {
        expect(block.timeStamp).toEqual(timeStamp);
        expect(block.hash).toEqual(hash);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.data).toEqual(data);
    });

    describe('GENESIS', () => {
        const genesisBlock = Block.genesis();

        it('returns a block instance', () => {
            expect(genesisBlock instanceof Block).toEqual(tru);
        })
    })

});
