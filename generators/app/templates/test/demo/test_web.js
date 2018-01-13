/**
 * Unit Test for <%= component_name %>UI
 *
 * @author <%= project_author %> <<%= project_author %>@corp.netease.com>
 */
NEJ.define([
    'base/element',
    'base/event',
    'pro/<%= component_name %>/web/ui'
],function (
    e, v,
    <%= component_name %>UI
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test WEB UI - <%= component_name %>UI',function () {
        // instance Base
        describe('new <%= component_name %>UI',function () {
            // test case - new instance
            it('should be ok to instance <%= component_name %>UI',function () {
                var inst = new <%= component_name %>UI();
                expect(inst).to.be.an.instanceof(<%= component_name %>UI);
            });
        });
    });
});
