## 可跳转到淘宝或天猫的插件（支持H5,APP-PLUS,MP，除微信-你懂的）

### 类：HJ_LBC 参数：
>#### this :不可忽略
>#### 初始化参数：Object-后面加入详细定义说明；

### 已测试：安卓APP 后面逐渐完善
##### v1.0.1 plus.core plus跳转淘宝某个商品页面，基于百川SDK利用plus.webview实现 2019-05-07

###求打赏、建议：
####讨论1：h5端实现利用location.href跳转，小程序（除微信），用一个<webview>组件跳转怎么样？资源要增加一个pages/web/web.vue用于打开外部url，可以接受吧？

### 使用示例
```
<template>
	<view class="content" >
		<text @tap="toD">跳转到商品521376186545</text> 这里可以自己组织商品展示的概要，通过百川的后台抓取商品信息
	</view>
</template>
<script>
	import HJ_LBC from "@/common/hj_lbc/hj_lbc.js" //这里修改下插件的相对路径
	var t ;
	export default {
		onLoad() {
			t = new HJ_LBC(this) ; //初始化
		},
		methods: {
			async toD() {
				t.toDetail({
					itemId: '521376186545' //商品ID
				})
			}
		}
	}
</script>
<style scoped="">
	
</style>
```