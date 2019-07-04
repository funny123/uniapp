// #ifdef APP-PLUS 
import {
	core
} from "./core/plus.js"
const defD = {
	appkey: '26037178',openApp: true,linkKey: 'TB', //"TM"。
	isNeedDownload: false, isDefaultRedirect: true
}
export default class HJ_LBC  {
	#cw;
	#inited ;
	constructor(global,data){
		this.#cw = global.$mp.page.$getAppWebview();
		this.#cw.evalJS(core)
		this.#cw.evalJS('hj_lbc()')
		let o1 = JSON.stringify(Object.assign({},defD,data))
		this.#cw.evalJS('o1 =' + o1)
		this.#cw.evalJS('BC_SDK = BCSDK_AppLink.init(o1)')
		this.#inited = true;
		return this
	}
	toDetail(options){
		if(!this.#inited) return
		this.#cw.evalJS('o2 =' + JSON.stringify(options))
		this.#cw.evalJS('BC_SDK.goDetail(o2)')
	}
}
//#endif