/**
 * <%= component_name %> 组件实现文件
 *
 * @version  1.0
 * @author   <%= project_author %> <<%= project_author %>@corp.netease.com>
 * @module   pool/component-<%= module_name %>/src/<%= component_name %>/component
 */
NEJ.define([
    'pool/component-base/src/base',
    'pool/component-base/src/util',
    './setting.js'
],function(
    Component,
    util, setting
){
    // 配置标识
    var SETTING_KEY = 'component-<%= module_name %>-<%= component_name %>';
    /**
     * <%= component_name %> 组件
     *
     * @class   module:pool/component-<%= module_name %>/src/<%= component_name %>/component.<%= component_name %>
     * @extends module:pool/component-base/src/base.Component
     *
     * @param {Object} options      - 组件构造参数
     * @param {Object} options.data - 与视图关联的数据模型
     */
    var <%= component_name %> = Component.$extends({
        /**
         * 模板编译前用来初始化参数
         *
         * @protected
         * @method  module:pool/component-<%= module_name %>/src/<%= component_name %>/component.<%= component_name %>#config
         * @returns {void}
         */
        config: function () {
            // 设置默认配置信息
            this._flushSetting(
                SETTING_KEY,setting
            );
            // FIXME 设置组件配置信息的默认值
            util.extend(this, {
                settingKey: SETTING_KEY
            });
            // FIXME 设置组件视图模型的默认值
            util.extend(this.data, {

            });
            this.supr();
            // TODO
        },

        /**
         * 模板编译之后(即活动dom已经产生)处理逻辑，可以在这里处理一些与dom相关的逻辑
         *
         * @protected
         * @method  module:pool/component-<%= module_name %>/src/<%= component_name %>/component.<%= component_name %>#init
         * @returns {void}
         */
        init: function () {
            // TODO
            this.supr();
        },

        /**
         * 组件销毁策略，如果有使用第三方组件务必在此先销毁第三方组件再销毁自己
         *
         * @protected
         * @method  module:pool/component-<%= module_name %>/src/<%= component_name %>/component.<%= component_name %>#destroy
         * @returns {void}
         */
        destroy: function () {
            // TODO
            this.supr();
        }
    });

    return <%= component_name %>;
});
