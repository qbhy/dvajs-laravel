<?php

namespace App\Services;

use Carbon\Carbon;
use Markdown;

class ArticleService
{

    public static function find($id)
    {

    }

    public static function articles()
    {
        $content = "## ssh 时常断开连接？
作为一名后端工程师，时常需要用到 `terminal` 远程链接到 `linux` 服务器中操作，例如部署环境之类的操作。但是，我们也常常会把 `terminal` 搁置在一边，然后做其他工作，很有可能你再切换回来的时候， `ssh链接` 已经因为超时断开了链接，需要你重新链接，并且如果你之前还有未完成的工作，也就中断了，很可能需要重来一次。

## ssh 远程连接超时问题解决方案
1. 修改 `server` 端的 `/etc/ssh/sshd_config`
```bash
$ vi /etc/ssh/sshd_config
ClientAliveInterval 60 ＃server每隔60秒发送一次请求给client，然后client响应，从而保持连接
ClientAliveCountMax 3  ＃server发出请求后，客户端没有响应得次数达到3，就自动断开连接，正常情况下，client不会不响应
```

2. 修改 `client` 端的 `/etc/ssh/ssh_config` 添加以下：
```bash
$ vi /etc/ssh/ssh_config
ServerAliveInterval 60 ＃client每隔60秒发送一次请求给server，然后server响应，从而保持连接
ServerAliveCountMax 3  ＃client发出请求后，服务器端没有响应得次数达到3，就自动断开连接，正常情况下，server不会不响应
```
> 通常是在没有权限改 `server` 配置的情形下才修改 `client` 端配置。

3. 另一种方式： 
不修改配置文件
在命令参数里 `ssh -o ServerAliveInterval=60` 这样子只会在需要的连接中保持持久连接， 毕竟不是所有连接都要保持持久的  
原文链接 [https://www.96qbhy.com](https://www.96qbhy.com)

";
        return [
            '123' => [
                'id' => 123,
                'title' => 'ssh 远程连接超时问题解决方案',
                'abstract' => 'ssh 时常断开连接？ 作为一名后端工程师，时常需要用到 terminal 远程链接到 linux 服务器中操作，例如部署环境之类的操作。但是，我们也常常会把 terminal 搁置在一边，然后做其他工作，很有可能你再切换回来的时候， ssh链接 已经因为超时断开了链接，需要你重新链接，并且如果你之前还有未完成的工作，也就中断了，很可能需要重来一次。 ssh 远程连接超时问题解决方案修改 server 端的 /etc/ssh/sshd_config$ vi /etc/ssh/sshd_configClientAliveInterval60＃server每隔60秒发送一次请求给client，然后client响应，从而保持连接ClientAliveCountMax3＃server发出请求后，客户端没有响应得次数达到...',
                'updatedAt' => Carbon::now()->diffForHumans(),
                "content" => ($content)
            ],
        ];
    }
}
