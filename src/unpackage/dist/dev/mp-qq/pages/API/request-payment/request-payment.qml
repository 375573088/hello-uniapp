<view><page-head vue-id="550c16cd-1" title="{{title}}" bind:__l="__l"></page-head><view class="uni-padding-wrap"><view style="background:#FFF;padding:50rpx 0;"><view class="uni-hello-text uni-center">支付金额</view><view class="uni-h1 uni-center uni-common-mt"><text class="rmbLogo">￥</text><input class="price" type="digit" maxlength="4" data-event-opts="{{[['input',[['priceChange',['$event']]]]]}}" value="{{price}}" bindinput="__e"/></view></view><view class="uni-btn-v uni-common-mt"></view></view></view>