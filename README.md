# nervjs-ie8
 - nervjs+react(可最新)+cmui+html5+css3+less+es6+webpack+axios+eslint+兼容IE8
 - 适合开发各种企业网站、后台管理系统、seo站点等等多页面应用
 - 结合hbuilder打包，可以直接做成全平台应用。例如 亲信地铁（vueapp） 腾讯应用宝或苹果appstore搜索‘亲信地铁’、web访问http://m.aiplat.com/metro

 - cmui仓库为https://github.com/womendi/cmui.git
 
 - 代码实例：ai智能空间nervjs版  http://nerv.aiplat.com
 - 实例相对应网站1：ai智能空间vue版  http://www.aiplat.com 
 - 实例相对应网站2：ai智能空间react版  http://react.aiplat.com

 - 原源代码仓库：https://github.com/NervJS/nerv-webpack-boilerplate
 - 对比原源代码：目录结构调整、删除sass新增less、新增多入口打包、新增Gzip、新增cmui等等


 # 代码目录结构

### 习惯vue后，改为与vueapp类似(https://github.com/womendi/vueapp)
 - build           ------webpack配置目录
 - config          ------webpack打包配置目录
 - dist            ------npm run build后实际布署代码目录
 - --- static      ------静态css、images、less文件目录
 - --- *.html      ------页面文件
 - src             ------代码主体目录
 - --- assets      ------各页面静态css、images、less文件目录
 - --- components  ------公共组件目录
 - --- page        ------各页面打包入口文件
 - --- plugins     ------公共函数或插件目录
 - --- views       ------路由对应页面视图目录
 - --- pageConfig.js     ------各页面路径配置（与page中文件关联）、TKD配置
 - static          ------公共静态css、images、less文件目录
 - index.html      ------多页面应用公共html入口文件

---

# clone
 - $ git clone https://github.com/womendi/nervjs-ie8.git

# 安装依赖
 - $ cd nervjs-ie8
 - $ npm install

# 开发模式

### 开发模式(热更新代码，自动刷新页面，不支持IE8调试)
 - $ npm run dev  或  npm start

### 最后看到以下这句 表示webpack编译成功
 - webpack: Compiled successfully.
 - 打开 http://本地ip:3010，方便手机在局域网访问

# 打包项目
 - $ npm run build
 - 整个项目代码打包到dist目录,已启用Gzip压缩，打开其中index.html就是项目 首页

# eslint 
 - $ npm run eslint  (查看)
 - $ npm run esfix  (查看并fix)

# 兼容性
 - PC端：使用最新react，兼容IE8。
 - 手机端兼容安卓与ios等等各种系统，不区分机型
 - 兼容一切可联网设备，比如TV等等,不区分尺寸大小