<view class="tabs"><scroll-view class="tab-bar vue-ref" id="tab-bar" scroll="{{false}}" scroll-x="{{true}}" show-scrollbar="{{false}}" scroll-into-view="{{scrollInto}}" data-ref="tabbar1"><view style="flex-direction:column;"><view style="flex-direction:row;"><block qq:for="{{tabList}}" qq:for-item="tab" qq:for-index="index" qq:key="id"><view class="uni-tab-item vue-ref-in-for" id="{{tab.id}}" data-id="{{index}}" data-current="{{index}}" data-ref="{{'tabitem'+index}}" data-event-opts="{{[['tap',[['ontabtap',['$event']]]]]}}" bindtap="__e"><text class="{{['uni-tab-item-title',tabIndex==index?'uni-tab-item-title-active':'']}}">{{tab.name}}</text></view></block></view><view class="scroll-view-indicator"><view data-ref="underline" class="{{['scroll-view-underline vue-ref',isTap?'scroll-view-animation':'']}}" style="{{'left:'+(indicatorLineLeft+'px')+';'+('width:'+(indicatorLineWidth+'px')+';')}}"></view></view></view></scroll-view><view class="tab-bar-line"></view><swiper class="tab-view vue-ref" id="tab-bar-view" current="{{tabIndex}}" duration="{{300}}" data-ref="swiper1" data-event-opts="{{[['change',[['onswiperchange',['$event']]]],['transition',[['onswiperscroll',['$event']]]],['animationfinish',[['animationfinish',['$event']]]],['onAnimationEnd',[['animationfinish',['$event']]]]]}}" bindchange="__e" bindtransition="__e" bindanimationfinish="__e" bindonAnimationEnd="__e"><block qq:for="{{tabList}}" qq:for-item="page" qq:for-index="index" qq:key="index"><swiper-item class="swiper-item"><swiper-page class="swiper-page vue-ref-in-for" vue-id="{{'c44cde76-1-'+index}}" pid="{{page.pageid}}" data-ref="page" bind:__l="__l"></swiper-page></swiper-item></block></swiper></view>