<view><text class="example-info">此示例展示了聊天列表的使用场景</text><uni-section vue-id="7b8ce270-1" title="圆头像且不显示分割线" type="line" bind:__l="__l"></uni-section><uni-list vue-id="7b8ce270-2" border="{{false}}" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{listData}}" qq:for-item="item" qq:for-index="__i0__" qq:key="id"><uni-list-chat vue-id="{{('7b8ce270-3-'+__i0__)+','+('7b8ce270-2')}}" avatar-circle="{{true}}" title="{{item.author_name}}" avatar="{{item.cover}}" note="{{item.title}}" time="{{item.published_at}}" clickable="{{false}}" bind:__l="__l"></uni-list-chat></block></uni-list><uni-section vue-id="7b8ce270-4" title="带圆点" type="line" bind:__l="__l"></uni-section><uni-list vue-id="7b8ce270-5" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{listData}}" qq:for-item="item" qq:for-index="__i1__" qq:key="id"><uni-list-chat vue-id="{{('7b8ce270-6-'+__i1__)+','+('7b8ce270-5')}}" title="{{item.author_name}}" avatar="{{item.cover}}" note="{{item.title}}" time="{{item.published_at}}" badge-text="dot" clickable="{{false}}" badge-positon="left" bind:__l="__l"></uni-list-chat></block></uni-list><uni-section vue-id="7b8ce270-7" title="自定义右侧内容" type="line" bind:__l="__l"></uni-section><uni-list vue-id="7b8ce270-8" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{listData}}" qq:for-item="item" qq:for-index="__i2__" qq:key="id"><uni-list-chat vue-id="{{('7b8ce270-9-'+__i2__)+','+('7b8ce270-8')}}" title="{{item.author_name}}" avatar="{{item.cover}}" note="{{item.title}}" badge-positon="left" badge-text="{{item.text}}" bind:__l="__l" vue-slots="{{['default']}}"><view class="chat-custom-right"><text class="chat-custom-text">刚刚</text><uni-icons vue-id="{{('7b8ce270-10-'+__i2__)+','+('7b8ce270-9-'+__i2__)}}" type="star-filled" color="#999" size="18" bind:__l="__l"></uni-icons></view></uni-list-chat></block></uni-list><uni-section vue-id="7b8ce270-11" title="带通知角标的单头像聊天列表" type="line" bind:__l="__l"></uni-section><uni-list vue-id="7b8ce270-12" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{listData}}" qq:for-item="item" qq:for-index="__i3__" qq:key="id"><uni-list-chat vue-id="{{('7b8ce270-13-'+__i3__)+','+('7b8ce270-12')}}" title="{{item.author_name}}" avatar="{{item.cover}}" note="{{item.title}}" time="{{item.published_at}}" clickable="{{true}}" badge-text="{{item.text}}" data-event-opts="{{[['^click',[['onClick']]]]}}" bind:click="__e" bind:__l="__l"></uni-list-chat></block></uni-list><uni-section vue-id="7b8ce270-14" title="带通知角标的多头像聊天列表" type="line" bind:__l="__l"></uni-section><uni-list vue-id="7b8ce270-15" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="index" qq:key="id"><uni-list-chat vue-id="{{('7b8ce270-16-'+index)+','+('7b8ce270-15')}}" title="{{item.$orig.author_name}}" avatar="{{item.$orig.cover}}" note="{{item.$orig.title}}" time="{{item.$orig.published_at}}" clickable="{{true}}" avatarList="{{item.m0}}" badge-text="{{item.$orig.text}}" data-event-opts="{{[['^click',[['onClick']]]]}}" bind:click="__e" bind:__l="__l"></uni-list-chat></block></uni-list></view>