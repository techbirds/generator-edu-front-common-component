/**
 * Entry for Unit Test
 *
 * @author <%= project_author %> <<%= project_author %>@corp.netease.com>
 */
NEJ.define([
    './<%= component_name %>/test.js',
    './<%= component_name %>/test_web.js',
    './<%= component_name %>/test_wap.js'
],function () {
    mocha.run();
});