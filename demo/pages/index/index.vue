<template>
	<!-- <view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
	</view> -->
	<view>
        <web-view :webview-styles="webviewStyles" src="https://quan.0512688.com"></web-view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
