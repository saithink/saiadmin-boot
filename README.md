<p align="center">
  <img src="https://saithink.top/images/logo.png" width="120" />
</p>
<p align="center">
  <img src="https://svg.hamm.cn/badge.svg?key=License&value=MIT" />
  <img src="https://svg.hamm.cn/badge.svg?key=Version&value=5.x" />
</p>

<div style="padding:18px;max-width: 1024px;margin:0 auto;">
<h1>SaiAdmin Boot</h1>

基于<a href="https://www.workerman.net/doc/webman/" target="_blank">webman</a> + <a href="https://vuejs.org" target="_blank">vue3</a>开箱即用的高质量中后台管理系统

- webman - (高性能HTTP服务框架)

- vue3 - (渐进式 JavaScript 框架)

- javascript - (简单、易用)


<h2 style="margin-top: 30px;">介绍</h2>


saiadmin-boot 是一个整合了 `saiadmin后端` 和 `saiadmin-vue前端` 的引导项目，能够方便我们快速的运行和创建 `saiadmin` 项目，完全保留了 `webman2.x` 的原汁原味，仅仅引入了 `saiadmin` 插件

<h2 style="margin-top: 30px;">安装</h2>

<h3>1、项目下载</h3>

只需要一个命令即可下载项目

```bash
#github
git clone --recurse-submodules https://github.com/saithink/saiadmin-boot.git
# gitee
git clone --recurse-submodules https://gitee.com/saigroup/saiadmin-boot
```

如果后续更新项目，执行以下命令即可更新

```bash
git pull && git submodule update --remote --recursive
```

<h3>2、后端安装</h3>

进入 `saiadmin-boot` 目录后，执行以下命令进行后端依赖安装

```bash
cd webman && composer install
```

<h4>windows用户运行</h4>

双击 `windows.bat` 或者运行 `php windows.php` 启动

<h4>linux用户运行</h4>

调试方式运行（用于开发调试，打印数据会显示在终端，终端关闭后webman服务也随之关闭）

```bash
php start.php
```

守护进程方式运行（用于正式环境，打印数据不会显示在终端，终端关闭后webman服务会持续运行）

```bash
php start.php -d
```

<h3>3、前端安装</h3>

进入 `saiadmin-boot` 目录后，执行以下命令进行前端依赖安装

```bash
cd saiadmin-vue && yarn install
```

运行

```bash
yarn dev
```

打包

```bash
yarn build
```

<h1>共同交流</h1>

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <img src="https://saithink.top/images/me.png" class="no-zoom" width="180px">
        <p>saiadmin交流群(添加我微信备注"saiadmin")</p>
      </td>
    </tr>
  </tbody>
</table>

<h1 style="margin-top: 30px;">支持项目</h1>

如果您正在使用这个项目并感觉良好，或者是想支持我继续开发，您可以通过如下`任意`方式支持我：

谢谢！ ❤️


|                                       微信                                       |                                      支付宝                                      |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img src="https://saithink.top/images/wechat.png" alt="Wechat QRcode" width=180> | <img src="https://saithink.top/images/alipay.png" alt="Alipay QRcode" width=180> |

<div style="clear: both">
<h1>LICENSE</h1>
This project is open-sourced software licensed under the MIT.
</div>

</div>