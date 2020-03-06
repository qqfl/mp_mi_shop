//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        //首页内容区左右滑动时滚动至顶
        scrollTop: '0',

        /**
         * 首页推荐模块数据
         */

        //轮播图数据
        imgUrls: [
            'https://i8.mifile.cn/v1/a1/3de85dc4-9a36-17d0-2943-327308535733!720x360.webp',
            'https://i8.mifile.cn/v1/a1/af921fca-4c8d-28a5-c0c5-8ed859f13994!720x360.webp',
            'https://i8.mifile.cn/v1/a1/d26c7135-3b73-4ae2-2f28-8e27c0284929!720x360.webp'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        //顶部二级菜单折叠控制数据
        mengShow: false,
        aniStyle: '',
        arrowStyle: '',
        //顶部二级菜单数据
        typeList: [
            '推荐',
            '手机',
            '情人节',
            '智能',
            '电视',
            '笔记本',
            '生活周边',
            '家电'
        ],
        //顶部二级菜单点击效果控制开关
        clickTypeNum: 0,
        //顶部二级菜单控制内容区滑动方向开关
        clickTypeFX: 'bodyAct',
        //顶部二级菜单控制内容区滑动开关
        oldBodyNum: 0,
        //顶部二级菜单控制内容区滑动方向开关
        oldBodyFX: 'bodyAct',
        //顶部二级菜单滚动条滚动距离
        scrollLeft: 0,
        //方块菜单数据
        boxMenu1: [
            'https://i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp',
            'https://i8.mifile.cn/v1/a1/c2fe874d-7569-ec8f-889c-a8f0089cc1ea!144x152.webp',
            'https://i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp',
            'https://i8.mifile.cn/v1/a1/b0d2efc6-ba54-3d14-c0d8-421c014a2c97!144x152.webp',
            'https://i8.mifile.cn/v1/a1/0de4d0e4-dcfe-a404-567e-e305e24593e4!144x152.webp'
        ],
        boxMenu2: [
            'https://i8.mifile.cn/v1/a1/c19e51dd-c493-21ea-343f-f331eb8a31ab!144x152.webp',
            'https://i8.mifile.cn/v1/a1/7255af3d-1847-5fe0-4777-d276b7fe2b7c!144x152.webp',
            'https://i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp',
            'https://i8.mifile.cn/v1/a1/b338546a-bba6-eff5-0b4e-6bcb90c6230e!144x152.webp',
            'https://i8.mifile.cn/v1/a1/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.webp'
        ],
        //方块菜单下3图数据
        boxMenuBottom: [
            'https://i8.mifile.cn/v1/a1/82378864-63b4-3b9a-74ff-14b0d127b78a!358x508.webp',
            'https://i8.mifile.cn/v1/a1/2b8b4b44-41bb-0fe8-5c8d-4a24072c3bf3!358x252.webp',
            'https://i8.mifile.cn/v1/a1/6d0b91f7-3686-a832-2519-85d84dc25c3b!358x252.webp'
        ],
        //每日精选数据
        model1: {
            tit1: 'https://i8.mifile.cn/v1/a1/bbe81f75-21a1-87d1-a263-efdbda22982f!720x280.webp',
            tit2: 'https://i8.mifile.cn/v1/a1/bba91c48-9f67-3dd7-41d7-313ab4bfc635!720x440.webp',
            product: [{
                    d1: 'https://i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/5c55b30b-abd9-3a52-7f8b-7322d288835d!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/def98121-4b54-54a6-debb-e5c8a51dd4f7!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/a081da10-3758-e051-7a20-0de017f37476!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/2c506517-9477-c928-8e77-bee18b6818a1!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/bd9b6895-5b51-a0d6-fb79-e430ca40dca6!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/a14a8cc3-3f47-3224-d221-8ff8485d624d!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/685330bb-cb82-c3c3-e3cf-106c9b9a70e6!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
            ]
        },
        //小米电视数据
        model2: {
            tit1: 'https://i8.mifile.cn/v1/a1/4c3f91f2-bca2-3dd8-7396-c12dd8c8e284!720x280.webp',
            tit2: 'https://i8.mifile.cn/v1/a1/f5599110-2fe2-2011-00cf-4d78eb2d3a9c!720x440.webp',
            product: [{
                    d1: 'https://i8.mifile.cn/v1/a1/3961de40-63f1-16cc-6ced-2c034f1f5e43!360x360.webp',
                    d2: '小米电视4C 43英寸',
                    d3: 'FHD全高清屏，钢琴烤漆',
                    d4: '￥1299起',
                    d5: '￥1599'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7d4d94788f8591e5557a4c23c3ba4307.jpg?thumb=1&w=360&h=360',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/c2428d05-c3d0-31c6-830d-feaf22326813!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4aa77a674400f1b836b33ba1d54a8d23.jpg?thumb=1&w=360&h=360',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/fdfd5ed2-0cf1-105b-f36d-64eda9be242c!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1499'
                },
            ]
        },
        //小米笔记本
        model3: {
            tit1: 'https://i8.mifile.cn/v1/a1/57ca9d90-7460-1ec6-922d-e02e460a5452!720x280.webp',
            tit2: 'https://i8.mifile.cn/v1/a1/2627319b-cb4c-6c13-2c96-c18286c1f34e!720x440.webp',
            product: [{
                    d1: 'https://i8.mifile.cn/v1/a1/48664b4c-07bb-f276-7fbb-a79a7ddd4a7e!360x360.webp',
                    d2: '小米笔记本',
                    d3: 'FHD全高清屏，钢琴烤漆',
                    d4: '￥1299起',
                    d5: '￥1599'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/780ebdf2-669a-923b-752d-8aecb392a08b!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/93aa5dda-ae56-3dac-d19a-8fd390189216!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/82df8302-8625-d544-8b12-cd37c8b1dd0b!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/0f5dc643-183c-5bce-8de3-0f0829e9c3d5!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1399'
                },
                {
                    d1: 'https://i8.mifile.cn/v1/a1/28bf863f-1c2d-52b8-a2e5-186dfcbaad1e!360x360.webp',
                    d2: '小米8 青春版',
                    d3: '潮流镜面渐变色，自拍旗舰',
                    d4: '￥1299起',
                    d5: '￥1499'
                },
            ]
        },

        /**
         * 首页手机模块数据
         */

        mobileActivity: [
            'https://i8.mifile.cn/v1/a1/32dd5a93-7666-e70b-4923-cc0c8d112521!720x512.webp',
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86e2cdad4ba8b34aee6762d9ae9f1957.png',
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c6a8f15af33e023cc9b61e4d8d698b3.png',
            'https://i8.mifile.cn/v1/a1/561ee49a-c18a-8b7a-103e-8b523b95b364!696x436.webp',
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b9f864a457dc01d563f9b0c551392b31.jpg?thumb=1&w=696&h=436'
        ],
        loveday: [
            'https://i8.mifile.cn/v1/a1/2478bfaf-54a9-f778-c4d3-050dbe36a3b9!720x806.webp',
            'https://i8.mifile.cn/v1/a1/630be66b-7de1-495e-1d83-4e63658d153e!720x174.webp',
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86e2cdad4ba8b34aee6762d9ae9f1957.png',
            'https://i8.mifile.cn/v1/a1/ddd7c9a5-f309-155d-7811-bf767cc4203b!720x174.webp',
            'https://i8.mifile.cn/v1/a1/d237947f-186c-cf16-e243-80efc26f8be9!720x165.webp'
        ],
        ai: [
            'https://i8.mifile.cn/v1/a1/1a695bcf-e5bb-7748-0edf-502e36acd69d!720x386.webp',
            'https://i8.mifile.cn/v1/a1/eaf95801-5e67-f0a9-01ed-2440af185be8!696x436.webp',
            'https://i8.mifile.cn/v1/a1/5f3044f0-a56c-565f-ebc4-3fb556ad8d53!720x142.webp',
            'https://i8.mifile.cn/v1/a1/8d5bc41b-6a15-920f-3f02-cacc7f20641d.webp',
            'https://i8.mifile.cn/v1/a1/92e19f16-3c79-75af-d0bd-e9705a3a2503.webp'
        ],
        tv: [
            'https://i8.mifile.cn/v1/a1/d508c9e5-1c1b-2ab7-ab19-436b4e18c2fa!720x513.webp',
            'https://i8.mifile.cn/v1/a1/aa938b2f-487d-8636-5ad6-59291e32f681!696x436.webp',
            'https://i8.mifile.cn/v1/a1/2cb31b19-ee0b-e273-075b-ed12b29014e8!696x436.webp',
            'https://i8.mifile.cn/v1/a1/910957fc-b2cd-1732-19e7-2136cf2dbeed!696x436.webp',
            'https://i8.mifile.cn/v1/a1/17dff637-8018-7f17-4776-3159dfd886de!696x436.webp'
        ],
        mpc: [
            'https://i8.mifile.cn/v1/a1/909a8119-dc2e-7574-fbec-da3eae8a1cb9!720x505.webp',
            'https://i8.mifile.cn/v1/a1/6e23c800-8113-6485-a719-1d6c1f7d28ab!696x436.webp',
            'https://i8.mifile.cn/v1/a1/b85cd2ed-cdab-8d0c-2e4c-4033319083be!696x436.webp',
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3819e995465630459325697e2d20debf.jpg?thumb=1&w=720&h=280',
            'https://i8.mifile.cn/v1/a1/2458fdcb-6a6e-30d2-57a8-582c09e15a41!696x436.webp'
        ],
        life: [
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28e1d24b43f72238e756b0f43d84621c.jpg?thumb=1&w=720&h=360',
            'https://i8.mifile.cn/v1/a1/c9bb544e-7ab8-bf1f-927f-8a867fd591bd.webp',
            'https://i8.mifile.cn/v1/a1/fc039887-b3a7-09a2-70cf-e7ccc98f9f3f!720x360.webp',
            'https://i8.mifile.cn/v1/a1/8833faf5-41af-8ffa-f8fb-0535e160930e!720x360.webp',
            'https://i8.mifile.cn/v1/a1/7088419a-29c9-5637-5840-5271ee905d6c!720x360.webp'
        ],
        electric: [
            'https://i8.mifile.cn/v1/a1/512d753b-b03a-da88-68c6-6bbecee9b2f9!720x360.webp',
            'https://i8.mifile.cn/v1/a1/74403053-7fb9-f612-ab36-1b41eaadc17d!720x360.webp',
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ca6ff57b03afab5b9c7dfe25864efff.jpg?thumb=1&w=720&h=360',
            'https://i8.mifile.cn/v1/a1/88c445ad-5dfd-e25b-6940-2f8febd48042.webp',
            'https://i8.mifile.cn/v1/a1/6e6d49b8-2976-3312-7d61-6ad8389575ee.webp'
        ],
    },

    /**
     * 首页推荐模块事件
     */

    //滑动二级菜单折叠事件
    showMeng() {
        this.setData({
            mengShow: !this.data.mengShow,
            aniStyle: this.data.aniStyle == 'slidedown' ? 'slideup' : 'slidedown',
            arrowStyle: this.data.arrowStyle == 'isdown' ? 'isup' : 'isdown'
        })
    },
    hideMeng() {
        this.setData({
            mengShow: false,
            aniStyle: 'slideup',
            arrowStyle: 'isup'
        })
    },

    //滑动二级菜单点击事件
    menuClickStyle(e) {
        const idx = e.currentTarget.dataset.idx;
        const num = this.data.clickTypeNum;
        //控制二级菜单点击后样式改变
        this.setData({
            oldBodyNum: num,
            clickTypeNum: idx,
            scrollTop: 0
        })
        //控制二级菜单点击时自动左右滚动
        if (idx < this.data.typeList.length / 2) {
            this.setData({
                scrollLeft: (idx - 2) * 50
            })
        } else(
            this.setData({
                scrollLeft: (idx - 2) * 50
            })
        )
        //控制二级菜单点击时body滚动方向
        if (num < idx) {
            this.setData({
                clickTypeFX: 'bodyFromRight',
                oldBodyFX: 'bodyToLeft'
            })
        }
        if (num > idx) {
            this.setData({
                clickTypeFX: 'bodyFromLeft',
                oldBodyFX: 'bodyToRight'
            })
        }
        if (num == idx) {
            this.setData({
                clickTypeFX: 'bodyAct',
                oldBodyFX: 'bodyAct'
            })
        }
    },
});