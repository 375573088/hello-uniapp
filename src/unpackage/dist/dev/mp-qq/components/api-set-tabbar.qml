<view class="uni-padding-wrap"><page-head vue-id="fe92e3fe-1" title="{{title}}" bind:__l="__l"></page-head><button data-event-opts="{{[['tap',[['setTabBarBadge',['$event']]]]]}}" class="button" bindtap="__e">{{!hasSetTabBarBadge?'设置tab徽标':'移除tab徽标'}}</button><button data-event-opts="{{[['tap',[['showTabBarRedDot',['$event']]]]]}}" class="button" bindtap="__e">{{!hasShownTabBarRedDot?'显示红点':'移除红点'}}</button><button data-event-opts="{{[['tap',[['customStyle',['$event']]]]]}}" class="button" bindtap="__e">{{!hasCustomedStyle?'自定义Tab样式':'移除自定义样式'}}</button><button data-event-opts="{{[['tap',[['customItem',['$event']]]]]}}" class="button" bindtap="__e">{{!hasCustomedItem?'自定义Tab信息':'移除自定义信息'}}</button><button data-event-opts="{{[['tap',[['hideTabBar',['$event']]]]]}}" class="button" bindtap="__e">{{!hasHiddenTabBar?'隐藏TabBar':'显示TabBar'}}</button><view class="btn-area"><button class="button" type="primary" data-event-opts="{{[['tap',[['navigateBack',['$event']]]]]}}" bindtap="__e">返回上一级</button></view></view>