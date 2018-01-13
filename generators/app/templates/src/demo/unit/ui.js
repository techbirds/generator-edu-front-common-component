/**
 * <%= component_name %>UI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   <%= project_author %> <<%= project_author %>@corp.netease.com>
 * @module   pool/component-<%= module_name %>/src/<% if(web) {%>web<%}else{%>wap<%}%>/<%= component_name %>/ui
 */
NEJ.define( [
    '../component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    <%= component_name %>,
    html,
    css
){
    /**
     * <%= component_name %> UI组件
     *
     * @class   module:pool/component-<%= module_name %>/src/<%= component_name %>/ui.<%= component_name %>UI
     * @extends module:pool/component-<%= component_name %>/src/<%= component_name %>.<%= component_name %>
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return <%= component_name %>.$extends({
        name     : 'ux-<%= module_name %>-<%= component_name %>',
        css      : css,
        template : html
    });
});
