(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/template/list2detail-list/list2detail-list"],{

/***/ 943:
/*!***************************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/main.js?{"page":"pages%2Ftemplate%2Flist2detail-list%2Flist2detail-list"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _list2detailList = _interopRequireDefault(__webpack_require__(/*! ./pages/template/list2detail-list/list2detail-list.vue */ 944));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_list2detailList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 944:
/*!******************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/list2detail-list/list2detail-list.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list2detail-list.vue?vue&type=template&id=1439eed3& */ 945);
/* harmony import */ var _list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list2detail-list.vue?vue&type=script&lang=js& */ 947);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list2detail_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list2detail-list.vue?vue&type=style&index=0&lang=css& */ 949);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/template/list2detail-list/list2detail-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 945:
/*!*************************************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/list2detail-list/list2detail-list.vue?vue&type=template&id=1439eed3& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list2detail-list.vue?vue&type=template&id=1439eed3& */ 946);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_template_id_1439eed3___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 946:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/list2detail-list/list2detail-list.vue?vue&type=template&id=1439eed3& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniLoadMore: function() {
    return __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 1054))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 947:
/*!*******************************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/list2detail-list/list2detail-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list2detail-list.vue?vue&type=script&lang=js& */ 948);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 948:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/list2detail-list/list2detail-list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniLoadMore = function uniLoadMore() {__webpack_require__.e(/*! require.ensure | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then((function () {return resolve(__webpack_require__(/*! @/components/uni-load-more/uni-load-more.vue */ 1054));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
































var dateUtils = __webpack_require__(/*! ../../../common/util.js */ 478).dateUtils;var _default =

{
  components: {
    uniLoadMore: uniLoadMore },

  data: function data() {
    return {
      banner: {},
      listData: [],
      last_id: '',
      reload: false,
      status: 'more',
      adpid: '',
      contentText: {
        contentdown: '上拉加载更多',
        contentrefresh: '加载中',
        contentnomore: '没有更多' } };


  },
  onLoad: function onLoad() {
    this.adpid = this.$adpid;
    this.getBanner();
    this.getList();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.reload = true;
    this.last_id = '';
    this.getBanner();
    this.getList();
  },
  onReachBottom: function onReachBottom() {
    this.status = 'more';
    this.getList();
  },
  methods: {
    getBanner: function getBanner() {var _this = this;
      var data = {
        column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
      };
      uni.request({
        url: 'https://unidemo.dcloud.net.cn/api/banner/36kr',
        data: data,
        success: function success(data) {
          uni.stopPullDownRefresh();
          if (data.statusCode == 200) {
            _this.banner = data.data;
          }
        },
        fail: function fail(data, code) {
          console.log('fail' + JSON.stringify(data));
        } });

    },
    getList: function getList() {var _this2 = this;
      var data = {
        column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
      };
      if (this.last_id) {
        //说明已有数据，目前处于上拉加载
        this.status = 'loading';
        data.minId = this.last_id;
        data.time = new Date().getTime() + '';
        data.pageSize = 10;
      }
      uni.request({
        url: 'https://unidemo.dcloud.net.cn/api/news',
        data: data,
        success: function success(data) {
          if (data.statusCode == 200) {
            var list = _this2.setTime(data.data);
            _this2.listData = _this2.reload ? list : _this2.listData.concat(list);
            _this2.last_id = list[list.length - 1].id;
            _this2.reload = false;
          }
        },
        fail: function fail(data, code) {
          console.log('fail' + JSON.stringify(data));
        } });

    },
    goDetail: function goDetail(e) {
      // 				if (!/前|刚刚/.test(e.published_at)) {
      // 					e.published_at = dateUtils.format(e.published_at);
      // 				}
      var detail = {
        author_name: e.author_name,
        cover: e.cover,
        id: e.id,
        post_id: e.post_id,
        published_at: e.published_at,
        title: e.title };

      uni.navigateTo({
        url: '../list2detail-detail/list2detail-detail?detailDate=' + encodeURIComponent(JSON.stringify(detail)) });

    },
    setTime: function setTime(items) {
      var newItems = [];
      items.forEach(function (e) {
        newItems.push({
          author_name: e.author_name,
          cover: e.cover,
          id: e.id,
          post_id: e.post_id,
          published_at: dateUtils.format(e.published_at),
          title: e.title });

      });
      return newItems;
    },
    aderror: function aderror(e) {
      console.log("aderror: " + JSON.stringify(e.detail));
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 949:
/*!***************************************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/list2detail-list/list2detail-list.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list2detail-list.vue?vue&type=style&index=0&lang=css& */ 950);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list2detail_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 950:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/list2detail-list/list2detail-list.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[943,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvdGVtcGxhdGUvbGlzdDJkZXRhaWwtbGlzdC9saXN0MmRldGFpbC1saXN0LnZ1ZT9lZGFlIiwid2VicGFjazovLy8vVXNlcnMvdGlhbmppYXhpbmcvUFAvRGNsb3VkL2hlbGxvLXVuaWFwcC9wYWdlcy90ZW1wbGF0ZS9saXN0MmRldGFpbC1saXN0L2xpc3QyZGV0YWlsLWxpc3QudnVlPzAyYzUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL3RlbXBsYXRlL2xpc3QyZGV0YWlsLWxpc3QvbGlzdDJkZXRhaWwtbGlzdC52dWU/MTliMSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvdGVtcGxhdGUvbGlzdDJkZXRhaWwtbGlzdC9saXN0MmRldGFpbC1saXN0LnZ1ZT9lODA1IiwidW5pLWFwcDovLy9wYWdlcy90ZW1wbGF0ZS9saXN0MmRldGFpbC1saXN0L2xpc3QyZGV0YWlsLWxpc3QudnVlIiwid2VicGFjazovLy8vVXNlcnMvdGlhbmppYXhpbmcvUFAvRGNsb3VkL2hlbGxvLXVuaWFwcC9wYWdlcy90ZW1wbGF0ZS9saXN0MmRldGFpbC1saXN0L2xpc3QyZGV0YWlsLWxpc3QudnVlPzEzOWMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL3RlbXBsYXRlL2xpc3QyZGV0YWlsLWxpc3QvbGlzdDJkZXRhaWwtbGlzdC52dWU/NzI0ZCJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0Esc0k7QUFDQUEsVUFBVSxDQUFDQyx3QkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUNhOzs7QUFHNUU7QUFDMk47QUFDM04sZ0JBQWdCLHlOQUFVO0FBQzFCLEVBQUUsc0ZBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxXQUFXLHVOQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBcTRCLENBQWdCLHMxQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lDejVCLGtGOztBQUVBO0FBQ0E7QUFDQSw0QkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLGdCQURBO0FBRUEsa0JBRkE7QUFHQSxpQkFIQTtBQUlBLG1CQUpBO0FBS0Esb0JBTEE7QUFNQSxlQU5BO0FBT0E7QUFDQSw2QkFEQTtBQUVBLDZCQUZBO0FBR0EsNkJBSEEsRUFQQTs7O0FBYUEsR0FsQkE7QUFtQkEsUUFuQkEsb0JBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F2QkE7QUF3QkEsbUJBeEJBLCtCQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E3QkE7QUE4QkEsZUE5QkEsMkJBOEJBO0FBQ0E7QUFDQTtBQUNBLEdBakNBO0FBa0NBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsaUVBREEsQ0FDQTtBQURBO0FBR0E7QUFDQSw0REFEQTtBQUVBLGtCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUkE7QUFTQTtBQUNBO0FBQ0EsU0FYQTs7QUFhQSxLQWxCQTtBQW1CQSxXQW5CQSxxQkFtQkE7QUFDQTtBQUNBLGlFQURBLENBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFEQTtBQUVBLGtCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVZBO0FBV0E7QUFDQTtBQUNBLFNBYkE7O0FBZUEsS0E3Q0E7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQURBO0FBRUEsc0JBRkE7QUFHQSxnQkFIQTtBQUlBLDBCQUpBO0FBS0Esb0NBTEE7QUFNQSxzQkFOQTs7QUFRQTtBQUNBLGdIQURBOztBQUdBLEtBN0RBO0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQSx3QkFGQTtBQUdBLGtCQUhBO0FBSUEsNEJBSkE7QUFLQSx3REFMQTtBQU1BLHdCQU5BOztBQVFBLE9BVEE7QUFVQTtBQUNBLEtBM0VBO0FBNEVBLFdBNUVBLG1CQTRFQSxDQTVFQSxFQTRFQTtBQUNBO0FBQ0EsS0E5RUEsRUFsQ0EsRTs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUF3d0MsQ0FBZ0IsbXFDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNXhDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvdGVtcGxhdGUvbGlzdDJkZXRhaWwtbGlzdC9saXN0MmRldGFpbC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3RlbXBsYXRlL2xpc3QyZGV0YWlsLWxpc3QvbGlzdDJkZXRhaWwtbGlzdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9saXN0MmRldGFpbC1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDM5ZWVkMyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpc3QyZGV0YWlsLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0MmRldGFpbC1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9saXN0MmRldGFpbC1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGVtcGxhdGUvbGlzdDJkZXRhaWwtbGlzdC9saXN0MmRldGFpbC1saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdDJkZXRhaWwtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQzOWVlZDMmXCIiLCJ2YXIgY29tcG9uZW50cyA9IHtcbiAgdW5pTG9hZE1vcmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvdW5pLWxvYWQtbW9yZS91bmktbG9hZC1tb3JlXCIgKi8gXCJAL2NvbXBvbmVudHMvdW5pLWxvYWQtbW9yZS91bmktbG9hZC1tb3JlLnZ1ZVwiXG4gICAgKVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0MmRldGFpbC1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdDJkZXRhaWwtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJhbm5lclwiIEBjbGljaz1cImdvRGV0YWlsKGJhbm5lcilcIj5cclxuXHRcdFx0PGltYWdlIGNsYXNzPVwiYmFubmVyLWltZ1wiIDpzcmM9XCJiYW5uZXIuY292ZXJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJhbm5lci10aXRsZVwiPnt7IGJhbm5lci50aXRsZSB9fTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RcIj5cclxuXHRcdFx0PGJsb2NrIHYtZm9yPVwiKHZhbHVlLCBpbmRleCkgaW4gbGlzdERhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0LWNlbGxcIiBob3Zlci1jbGFzcz1cInVuaS1saXN0LWNlbGwtaG92ZXJcIiBAY2xpY2s9XCJnb0RldGFpbCh2YWx1ZSlcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW1lZGlhLWxpc3RcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidW5pLW1lZGlhLWxpc3QtbG9nb1wiIDpzcmM9XCJ2YWx1ZS5jb3ZlclwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW1lZGlhLWxpc3QtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW1lZGlhLWxpc3QtdGV4dC10b3BcIj57eyB2YWx1ZS50aXRsZSB9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1tZWRpYS1saXN0LXRleHQtYm90dG9tXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dD57eyB2YWx1ZS5hdXRob3JfbmFtZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0Pnt7IHZhbHVlLnB1Ymxpc2hlZF9hdCB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZC12aWV3XCIgdi1pZj1cIihpbmRleCA+IDAgJiYgKGluZGV4KzEpICUgMTAgPT0gMClcIj5cclxuXHRcdFx0XHRcdDxhZCA6YWRwaWQ9XCJhZHBpZFwiIEBlcnJvcj1cImFkZXJyb3JcIj48L2FkPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx1bmktbG9hZC1tb3JlIDpzdGF0dXM9XCJzdGF0dXNcIiA6aWNvbi1zaXplPVwiMTZcIiA6Y29udGVudC10ZXh0PVwiY29udGVudFRleHRcIiAvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHVuaUxvYWRNb3JlIGZyb20gJ0AvY29tcG9uZW50cy91bmktbG9hZC1tb3JlL3VuaS1sb2FkLW1vcmUudnVlJztcclxuXHR2YXIgZGF0ZVV0aWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL3V0aWwuanMnKS5kYXRlVXRpbHM7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dW5pTG9hZE1vcmVcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGJhbm5lcjoge30sXHJcblx0XHRcdFx0bGlzdERhdGE6IFtdLFxyXG5cdFx0XHRcdGxhc3RfaWQ6ICcnLFxyXG5cdFx0XHRcdHJlbG9hZDogZmFsc2UsXHJcblx0XHRcdFx0c3RhdHVzOiAnbW9yZScsXHJcblx0XHRcdFx0YWRwaWQ6ICcnLFxyXG5cdFx0XHRcdGNvbnRlbnRUZXh0OiB7XHJcblx0XHRcdFx0XHRjb250ZW50ZG93bjogJ+S4iuaLieWKoOi9veabtOWkmicsXHJcblx0XHRcdFx0XHRjb250ZW50cmVmcmVzaDogJ+WKoOi9veS4rScsXHJcblx0XHRcdFx0XHRjb250ZW50bm9tb3JlOiAn5rKh5pyJ5pu05aSaJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuYWRwaWQgPSB0aGlzLiRhZHBpZDtcclxuXHRcdFx0dGhpcy5nZXRCYW5uZXIoKTtcclxuXHRcdFx0dGhpcy5nZXRMaXN0KCk7XHJcblx0XHR9LFxyXG5cdFx0b25QdWxsRG93blJlZnJlc2goKSB7XHJcblx0XHRcdHRoaXMucmVsb2FkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5sYXN0X2lkID0gJyc7XHJcblx0XHRcdHRoaXMuZ2V0QmFubmVyKCk7XHJcblx0XHRcdHRoaXMuZ2V0TGlzdCgpO1xyXG5cdFx0fSxcclxuXHRcdG9uUmVhY2hCb3R0b20oKSB7XHJcblx0XHRcdHRoaXMuc3RhdHVzID0gJ21vcmUnO1xyXG5cdFx0XHR0aGlzLmdldExpc3QoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldEJhbm5lcigpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGNvbHVtbjogJ2lkLHBvc3RfaWQsdGl0bGUsYXV0aG9yX25hbWUsY292ZXIscHVibGlzaGVkX2F0JyAvL+mcgOimgeeahOWtl+auteWQjVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly91bmlkZW1vLmRjbG91ZC5uZXQuY24vYXBpL2Jhbm5lci8zNmtyJyxcclxuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmJhbm5lciA9IGRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChkYXRhLCBjb2RlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TGlzdCgpIHtcclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdGNvbHVtbjogJ2lkLHBvc3RfaWQsdGl0bGUsYXV0aG9yX25hbWUsY292ZXIscHVibGlzaGVkX2F0JyAvL+mcgOimgeeahOWtl+auteWQjVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aWYgKHRoaXMubGFzdF9pZCkge1xyXG5cdFx0XHRcdFx0Ly/or7TmmI7lt7LmnInmlbDmja7vvIznm67liY3lpITkuo7kuIrmi4nliqDovb1cclxuXHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gJ2xvYWRpbmcnO1xyXG5cdFx0XHRcdFx0ZGF0YS5taW5JZCA9IHRoaXMubGFzdF9pZDtcclxuXHRcdFx0XHRcdGRhdGEudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJyc7XHJcblx0XHRcdFx0XHRkYXRhLnBhZ2VTaXplID0gMTA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vdW5pZGVtby5kY2xvdWQubmV0LmNuL2FwaS9uZXdzJyxcclxuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgbGlzdCA9IHRoaXMuc2V0VGltZShkYXRhLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubGlzdERhdGEgPSB0aGlzLnJlbG9hZCA/IGxpc3QgOiB0aGlzLmxpc3REYXRhLmNvbmNhdChsaXN0KTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxhc3RfaWQgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0uaWQ7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yZWxvYWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChkYXRhLCBjb2RlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z29EZXRhaWw6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHQvLyBcdFx0XHRcdGlmICghL+WJjXzliJrliJovLnRlc3QoZS5wdWJsaXNoZWRfYXQpKSB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdGUucHVibGlzaGVkX2F0ID0gZGF0ZVV0aWxzLmZvcm1hdChlLnB1Ymxpc2hlZF9hdCk7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRldGFpbCA9IHtcclxuXHRcdFx0XHRcdGF1dGhvcl9uYW1lOiBlLmF1dGhvcl9uYW1lLFxyXG5cdFx0XHRcdFx0Y292ZXI6IGUuY292ZXIsXHJcblx0XHRcdFx0XHRpZDogZS5pZCxcclxuXHRcdFx0XHRcdHBvc3RfaWQ6IGUucG9zdF9pZCxcclxuXHRcdFx0XHRcdHB1Ymxpc2hlZF9hdDogZS5wdWJsaXNoZWRfYXQsXHJcblx0XHRcdFx0XHR0aXRsZTogZS50aXRsZVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi4vbGlzdDJkZXRhaWwtZGV0YWlsL2xpc3QyZGV0YWlsLWRldGFpbD9kZXRhaWxEYXRlPScgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZGV0YWlsKSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0VGltZTogZnVuY3Rpb24oaXRlbXMpIHtcclxuXHRcdFx0XHR2YXIgbmV3SXRlbXMgPSBbXTtcclxuXHRcdFx0XHRpdGVtcy5mb3JFYWNoKGUgPT4ge1xyXG5cdFx0XHRcdFx0bmV3SXRlbXMucHVzaCh7XHJcblx0XHRcdFx0XHRcdGF1dGhvcl9uYW1lOiBlLmF1dGhvcl9uYW1lLFxyXG5cdFx0XHRcdFx0XHRjb3ZlcjogZS5jb3ZlcixcclxuXHRcdFx0XHRcdFx0aWQ6IGUuaWQsXHJcblx0XHRcdFx0XHRcdHBvc3RfaWQ6IGUucG9zdF9pZCxcclxuXHRcdFx0XHRcdFx0cHVibGlzaGVkX2F0OiBkYXRlVXRpbHMuZm9ybWF0KGUucHVibGlzaGVkX2F0KSxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGUudGl0bGVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiBuZXdJdGVtcztcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRlcnJvcihlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJhZGVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGUuZGV0YWlsKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuYmFubmVyIHtcclxuXHRcdGhlaWdodDogMzYwcnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcblx0fVxyXG5cclxuXHQuYmFubmVyLWltZyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5iYW5uZXItdGl0bGUge1xyXG5cdFx0bWF4LWhlaWdodDogODRycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMzBycHg7XHJcblx0XHRib3R0b206IDMwcnB4O1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQycnB4O1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0ei1pbmRleDogMTE7XHJcblx0fVxyXG5cclxuXHQudW5pLW1lZGlhLWxpc3QtbG9nbyB7XHJcblx0XHR3aWR0aDogMTgwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNDBycHg7XHJcblx0fVxyXG5cclxuXHQudW5pLW1lZGlhLWxpc3QtYm9keSB7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHR9XHJcblxyXG5cdC51bmktbWVkaWEtbGlzdC10ZXh0LXRvcCB7XHJcblx0XHRoZWlnaHQ6IDc0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQudW5pLW1lZGlhLWxpc3QtdGV4dC1ib3R0b20ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QyZGV0YWlsLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0MmRldGFpbC1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNTE3NTc4NDY4M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=